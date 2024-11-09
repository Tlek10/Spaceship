import { createSlice } from '@reduxjs/toolkit';
import { fetchStarships } from './asyncActions';
import {Starship, StarshipsState} from "./type";



const initialState: StarshipsState = {
    starships: [],
    status: 'idle',
};

const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStarships.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStarships.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.starships = action.payload;
            })
            .addCase(fetchStarships.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default starshipsSlice.reducer;
