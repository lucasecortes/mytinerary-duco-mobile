import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-tinerary-back-duco.herokuapp.com',
  }),

  endpoints: (builder) => ({
    getAllCities: builder.query({
      query: () => "/cities",
    }),
    searchCities: builder.query({
      query: (search) => `/cities/?city=${search}`,
    }),
    createCity: builder.mutation({
      query: (data) => ({
        url: "/cities/",
        method: "POST",
        body: data,
      }),
    }),
    getCity: builder.query({
      query: (id) => `/cities/${id}`,
    }),

    editCity: builder.mutation({
      query: ({ dataCity, id }) => ({
        url: `/cities/${id}`,
        method: "PATCH",
        body: dataCity,
      }),
    }),
  }),
});

export default citiesAPI;
export const {
  useGetAllCitiesQuery,
  useSearchCitiesQuery,
  useCreateCityMutation,
  useEditCityMutation,
  useGetCityQuery,
} = citiesAPI;
