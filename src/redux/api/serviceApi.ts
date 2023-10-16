import { baseApi } from "./baseApi";

const SERVICE_URL = "/makeover-service";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all services
    services: build.query({
      query: (query: Record<string, any>) => ({
        url: SERVICE_URL,
        method: "GET",
        params: query,
      }),
    }),
  }),
});

export const { useServicesQuery } = serviceApi;
