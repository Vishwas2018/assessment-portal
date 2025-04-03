'use client';

import { AppDispatch, RootState } from '@/src/lib/redux/store';
import { FormEvent, useEffect, useState } from 'react';
import { clearError, login } from '@/src/lib/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  // Add mounting state to prevent hydration issues
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Clear any previous errors when component mounts
    dispatch(clearError());
  }, [dispatch]);

  // Only run this effect when component is mounted (client-side)
  useEffect(() => {
    if (isMounted && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isMounted, isAuthenticated, router]);

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Clear field error when user starts typing
    if (formErrors[e.target.name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };
    
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    
    setFormErrors(newErrors);
    return valid;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(login({ email, password }));
    }
  };

  // Rest of your component remains the same
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Your existing JSX */}
      {/* Just make sure you don't have any direct window references in the JSX */}
    </div>
  );
}