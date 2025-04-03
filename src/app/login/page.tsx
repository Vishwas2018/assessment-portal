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

  // Redirect if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
    
    // Clear any previous errors when component mounts
    dispatch(clearError());
  }, [isAuthenticated, router, dispatch]);

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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950 via-indigo-950 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animation-delay-2000 animate-blob"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-16 relative">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
                <div className="relative w-10 h-10 flex items-center justify-center bg-black rounded-lg">
                  <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">T</span>
                </div>
              </div>
              <div className="text-3xl font-extrabold ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500">TestPlatform</span>
              </div>
            </Link>
          </header>

          {/* Login Form */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
                
                {error && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center">
                    {error}
                  </div>
                )}
                
                <form onSubmit={onSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        formErrors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white`}
                      placeholder="Your email"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-400 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm text-white/60 mb-2">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        formErrors.password ? 'border-red-500' : 'border-white/10'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white`}
                      placeholder="Your password"
                    />
                    {formErrors.password && (
                      <p className="mt-1 text-red-400 text-sm">{formErrors.password}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative inline-flex w-full h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff80b5_0%,#9089fc_50%,#ff80b5_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
                        {loading ? 'Logging in...' : 'Log In'}
                      </span>
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-white/60">
                      Don't have an account?{' '}
                      <Link href="/signup" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}