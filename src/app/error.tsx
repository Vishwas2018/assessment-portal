'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Something went wrong!</h2>
          <p className="text-gray-400 text-center mb-6">
            We encountered an error while loading this page.
          </p>
          <button
            onClick={reset}
            className="w-full py-2 px-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white rounded-lg hover:from-fuchsia-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}