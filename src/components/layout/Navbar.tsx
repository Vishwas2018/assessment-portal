'use client';

import { AppDispatch, RootState } from '@/src/lib/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import { logout } from '@/src/lib/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 flex items-center justify-center mr-2">
                <span className="text-xl font-bold text-white">T</span>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">TestPlatform</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#features" className="text-white/80 hover:text-white transition-colors">Features</Link>
            <Link href="/#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
            <Link href="/#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</Link>
            <Link href="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button 
                  className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span>{user?.name || 'User'}</span>
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg z-50">
                    <div className="py-2 px-4 border-b border-white/10">
                      <p className="text-sm text-white/60">Signed in as</p>
                      <p className="font-medium truncate">{user?.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors duration-300"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}