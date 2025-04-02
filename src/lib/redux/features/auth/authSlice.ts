// src/app/store/features/auth/authSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

// Define initial state
// src/lib/redux/features/auth/authSlice.ts
// Replace the current initialState with this:

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Create async thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      
      // Store token in localStorage
      localStorage.setItem('token', res.data.token);
      
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password, role }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/register', { name, email, password, role });
      
      // Store token in localStorage
      localStorage.setItem('token', res.data.token);
      
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      // Get token from state
      const token = getState().auth.token;
      
      if (!token) {
        return rejectWithValue('No token');
      }
      
      // Set headers
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      
      const res = await axios.get('/api/auth/me', config);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  // In your authSlice.ts, add this to your reducers:

reducers: {
  logout: (state) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    state.token = null;
    state.isAuthenticated = false;
    state.user = null;
  },
  clearError: (state) => {
    state.error = null;
  },
  // Add this new reducer
  setToken: (state, action) => {
    state.token = action.payload;
    state.isAuthenticated = true;
  }
},
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Load user cases
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.token = null;
        state.error = action.payload;
      });
  }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;