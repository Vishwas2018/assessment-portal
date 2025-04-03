// src/lib/redux/provider.tsx
'use client';

import { loadUser, setToken } from './features/auth/authSlice';

import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  // Initialize client-side state after component mounts
  useEffect(() => {
    // Client-side only code
    if (typeof window !== 'undefined') {
      // Check for token in localStorage
      const token = localStorage.getItem('token');
      if (token) {
        // Set the token in the Redux store
        store.dispatch(setToken(token));
        
        // Load the user data
        store.dispatch(loadUser());
      }
    }
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}