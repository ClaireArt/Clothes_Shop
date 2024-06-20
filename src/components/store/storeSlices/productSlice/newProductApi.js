import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newProductApi = createApi({
    reducerPath: 'newProduct',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),
    tagTypes: ['newProduct', 'admin', 'cart'],
    endpoints: (build) => ({
        getAdmin: build.query({
            query: () => 'admin',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'admin', id })),
                    { type: 'admin', id: 'LIST' }
                    ]
                    : [{ type: 'admin', id: 'LIST' }]
        }),

        postProduct: build.mutation({
            query: (newProduct) => ({
                url: 'products',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: [{ type: 'newProduct', id: 'LIST' }]
        }),
        getProducts: build.query({
            query: () => 'products',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'newProduct', id })),
                    { type: 'newProduct', id: 'LIST' }
                    ]
                    : [{ type: 'newProduct', id: 'LIST' }]
        }),

        delAdminProduct: build.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'newProduct', id: 'LIST' }]
        }),

        getCart: build.query({
            query: () => 'cart',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'cart', id })),
                    { type: 'cart', id: 'LIST' }
                    ]
                    : [{ type: 'cart', id: 'LIST' }]
        }),

        postCart: build.mutation({
            query: (prod) => ({
                url: 'cart',
                method: 'POST',
                body: prod
            }),
            invalidatesTags: [{ type: 'cart', id: 'LIST' }]
        }),

        delCart: build.mutation({
            query: (id) => ({
                url: `cart/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'cart', id: 'LIST' }]
        }),

        checkCount: build.mutation({
            query: (body) => ({
                url: `cart/${body.id}`,
                method: 'PUT',
                body: {
                    ...body
                }
            }),
            invalidatesTags: [{ type: 'cart', id: 'LIST' }]
        }),

    })
})

export const { useGetAdminQuery, usePostProductMutation, useGetProductsQuery, useDelAdminProductMutation, useGetCartQuery, usePostCartMutation, useDelCartMutation, useCheckCountMutation } = newProductApi

export const newProductReducer = newProductApi.reducer