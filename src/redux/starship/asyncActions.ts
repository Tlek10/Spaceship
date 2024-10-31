import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {Starship} from "./type";
import {RootState} from "../store";

export const fetchStarships = createAsyncThunk('starships/fetchStarships', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/');
    return response.data.results as Starship[];
});

export const selectStarshipData =(state: RootState)=>state.starships;