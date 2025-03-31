"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true); 
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        closeDialog();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };

    if (isDialogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDialogOpen]);

  const closeDialog = () => {
    setIsDialogOpen(false);
    router.push('/'); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      //  authentication logic here
      console.log('Logging in with:', { email, password });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container">
     

      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="login-dialog" ref={dialogRef}>
            <button 
              className="dialog-close-button"
              onClick={closeDialog}
              aria-label="Close login dialog"
            >
              ×
            </button>
            
            <div className="login-header">
             
              <h2 className="login-title">Blood Donation Portal</h2>
              <p className="login-subtitle">Sign in to your account</p>
            </div>
            
            {error && (
              <div className="login-error">
                <svg className="error-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                </svg>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                  placeholder="••••••••"
                />
              </div>
              
              <button 
                type="submit" 
                className={`login-button ${isLoading ? 'loading' : ''}`} 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="spinner" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                    Signing in...
                  </>
                ) : 'Sign In'}
              </button>
            </form>
            
            <div className="login-footer">
              <Link href="/forgot-password" className="footer-link">
                Forgot password?
              </Link>
              <span className="footer-text">Don't have an account?</span>
              <Link href="/register" className="footer-link accent">
                Register now
              </Link>
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
};

export default LoginPage;