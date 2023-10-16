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
    // get single service
    singleService: build.query({
      query: (id: string) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useServicesQuery, useSingleServiceQuery } = serviceApi;
