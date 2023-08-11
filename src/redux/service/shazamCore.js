import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers )=> {
      headers.set('X-RapidAPI-Key', '53c14de0e0msh35541b6d6f0feb1p166c7fjsn6fcc9ebaa163');
      return headers;
    },
  }),
 
  endpoints: (builder)=>({
    
      getTopCharts: builder.query({
        query: () => '/charts/world'}),
    
      getSongDetails: builder.query({
        query:({songid}) => `/tracks/details?track_id=${ songid }`}),
      getSongRelated: builder.query({
        query:({songid}) => `/tracks/related?track_id=${ songid }`}),
        getArtistDetails: builder.query({
          query:({artistId}) => `/artists/details?artist_id=${ artistId }`}),
      })
    })
export const { 
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery
   } = shazamCoreApi;