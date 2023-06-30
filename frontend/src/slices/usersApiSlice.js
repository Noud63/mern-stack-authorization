import { apiSlice } from "./apiSlice"

const USERS_URL = 'api/users'

export const usersApiSlice = apiSlice.injectEndpoints({     /* injects api endpoints in the apiSlice endpoints */
endpoints: (builder) => ({                                  /* parantheses around curly braces to set data (argument) to an object */
    login: builder.mutation({
        query: (data) => ({
              url: `${USERS_URL}/auth`,
              method: 'POST',
              body: data
        })
    }),
    register: builder.mutation({
        query: (data) => ({
              url: `${USERS_URL}`,
              method: 'POST',
              body: data
        })
    }),
    logout: builder.mutation({
        query: () => ({
              url: `${USERS_URL}/logout`,
              method: 'POST',
        })
    })
})
}); 

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = usersApiSlice