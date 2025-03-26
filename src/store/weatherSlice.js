import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather } from "../api/weather.api.js";
const initialState = { data: null, loading: false, error: null };

const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
    const response = await getWeather(city);
    return response;
});

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.loading = false;
                state.error =
                    action.error.message || "Failed to fetch weather data";
            });
    },
});

export default weatherSlice.reducer;
