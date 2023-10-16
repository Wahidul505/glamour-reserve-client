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
  }),
});

export const { useCategoriesQuery } = categoryApi;
