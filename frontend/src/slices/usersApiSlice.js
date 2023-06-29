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
    })
})
}); 

export const { useLoginMutation } = usersApiSlice