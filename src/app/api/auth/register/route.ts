// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';

import User from '@/src/models/User';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/src/lib/db';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { name, email, password, role } = await request.json();
    
    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Please provide all required fields' }, 
        { status: 400 }
      );
    }
    
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: 'User already exists' }, 
        { status: 400 }
      );
    }
    
    // Create new user with hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'student'
    });
    
    await user.save();
    
    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );
    
    // Create response
    const response = NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
    
    // Set HTTP-only cookie with token
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Server error' }, 
      { status: 500 }
    );
  }
}