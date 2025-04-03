import type { NextRequest } from 'next/server';
// middleware.ts
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Routes that require authentication
const PROTECTED_ROUTES = ['/dashboard', '/tests'];

// Routes only accessible to specific roles
const ROLE_RESTRICTED_ROUTES = {
  '/admin': ['admin'],
  '/create-test': ['teacher', 'admin'],
};

export async function middleware(request: NextRequest) {
  // Get token from cookie
  const token = request.cookies.get('auth_token')?.value;
  const pathname = request.nextUrl.pathname;
  
  // Check if route requires authentication
  const isProtectedRoute = PROTECTED_ROUTES.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  // Check role restrictions
  const hasRoleRestriction = Object.keys(ROLE_RESTRICTED_ROUTES).some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  if (!isProtectedRoute && !hasRoleRestriction) {
    return NextResponse.next();
  }
  
  if (!token) {
    // Redirect to login if no token and route requires auth
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }
  
  try {
    // Verify token
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your_jwt_secret'
    );
    
    const { payload } = await jwtVerify(token, secret);
    
    // Check role restrictions if applicable
    if (hasRoleRestriction) {
      const userRole = payload.role as string;
      const restrictedRoute = Object.keys(ROLE_RESTRICTED_ROUTES).find(route => 
        pathname === route || pathname.startsWith(`${route}/`)
      );
      
      if (restrictedRoute && !ROLE_RESTRICTED_ROUTES[restrictedRoute].includes(userRole)) {
        // Redirect to dashboard if user doesn't have required role
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }
    
    // Continue if all checks pass
    return NextResponse.next();
  } catch (error) {
    // Redirect to login if token is invalid
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - login and register routes
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|login|signup).*)',
  ],
}