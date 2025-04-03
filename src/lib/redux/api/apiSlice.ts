// src/lib/redux/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    credentials: 'include', // Include cookies in requests
  }),
  tagTypes: ['User', 'Test'],
  endpoints: (builder) => ({
    // Auth endpoints
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    
    getUser: builder.query({
      query: () => '/auth/me',
      providesTags: ['User'],
    }),
    
    // Test endpoints
    getTests: builder.query({
      query: () => '/tests',
      providesTags: ['Test'],
    }),
    
    getTestById: builder.query({
      query: (id) => `/tests/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Test', id: arg }],
    }),
    
    createTest: builder.mutation({
      query: (testData) => ({
        url: '/tests',
        method: 'POST',
        body: testData,
      }),
      invalidatesTags: ['Test'],
    }),
    
    updateTest: builder.mutation({
      query: ({ id, ...testData }) => ({
        url: `/tests/${id}`,
        method: 'PUT',
        body: testData,
      }),
      invalidatesTags: (result, error, arg) => [
        'Test',
        { type: 'Test', id: arg.id },
      ],
    }),
    
    deleteTest: builder.mutation({
      query: (id) => ({
        url: `/tests/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Test'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserQuery,
  useGetTestsQuery,
  useGetTestByIdQuery,
  useCreateTestMutation,
  useUpdateTestMutation,
  useDeleteTestMutation,
} = apiSlice;