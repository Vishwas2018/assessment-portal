// src/lib/redux/provider.tsx
'use client';

import { loadUser, setToken } from './features/auth/authSlice';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  // Use a state flag to track if we're on the client
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Set the flag once the component mounts (client-side only)
    setIsClient(true);
    
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Set the token in the Redux store
      store.dispatch(setToken(token));
      
      // Load the user data
      store.dispatch(loadUser());
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}