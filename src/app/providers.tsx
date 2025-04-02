// src/lib/redux/provider.tsx
'use client';

import { Provider } from 'react-redux';
import { login } from './features/auth/authSlice';
import { store } from './store';
import { useEffect } from 'react';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  // Initialize client-side state after component mounts
  useEffect(() => {
    // Check for token in localStorage after client-side rendering
    const token = localStorage.getItem('token');
    if (token) {
      // Dispatch an action to set the token without making an API call
      store.dispatch({ 
        type: 'auth/setToken', 
        payload: token 
      });
    }
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}