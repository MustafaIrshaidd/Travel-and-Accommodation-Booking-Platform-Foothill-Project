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