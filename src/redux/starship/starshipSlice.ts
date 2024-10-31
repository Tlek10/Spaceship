import { createSlice } from '@reduxjs/toolkit';
import { fetchStarships } from './asyncActions';
import {Starship} from "./type";

interface StarshipsState {
    starships: Starship[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

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
