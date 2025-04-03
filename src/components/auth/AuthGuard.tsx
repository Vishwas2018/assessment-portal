'use client';

import { useEffect, useState } from 'react';

import { RootState } from '@/src/lib/redux/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Only run authentication check on the client
    const checkAuth = () => {
      if (!loading) {
        if (!isAuthenticated) {
          router.push('/login');
        }
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [isAuthenticated, loading, router]);

  // Show loading state while checking authentication
  if (isChecking || loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-fuchsia-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  // If authenticated, render children
  return <>{children}</>;
}