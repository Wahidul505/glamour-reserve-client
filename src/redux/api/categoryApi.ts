import { baseApi } from "./baseApi";

const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all categories
    categories: build.query({
      query: (query: Record<string, any>) => ({
        url: CATEGORY_URL,
        method: "GET",
        params: query,
      }),
    }),
    // create category
    createCategory: build.mutation({
      query: (data) => ({
        url: CATEGORY_URL,
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useCategoriesQuery, useCreateCategoryMutation } = categoryApi;
