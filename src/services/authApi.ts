import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_PUBLIC_API_URI
  }),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: (body: { username: string; password: string }) => ({
        url: 'api/auth/signin',
        method: 'post',
        body
      })
    })
  })
});

export const { useLoginUserMutation } = authApi;
