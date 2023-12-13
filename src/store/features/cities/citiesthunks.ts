import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { City } from '@store/types/cities';

export const fetchCities = createAsyncThunk('cities/fetchCities', async (args:{pageNumber?:number,pageSize?:number}) => {
    try {
        const res = await axios.get(`https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/cities?pageSize=${args.pageSize||5}&pageNumber=${args.pageNumber||1}`);
        return res.data as City[];
    } catch (err) {
        throw err;
    }
});

export const addCityAsync = createAsyncThunk("cities/addCity", async (cityData: Omit<City, "id">) => {
    try {
      const response = await axios.post(`https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/cities/`, cityData);
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  export const deleteCityAsync = createAsyncThunk("cities/deleteCity", async (id:number) => {
    try {
      const response = await axios.delete(`https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api/cities/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  });