import { createSlice } from "@reduxjs/toolkit";

// Load auth state from localStorage
const loadAuthState = () => {
    const authState = localStorage.getItem("auth");
    return authState
        ? JSON.parse(authState)
        : { isAuthenticated: false, username: "", city: "" };
};

const saveAuthState = (authState) => {
    localStorage.setItem("auth", JSON.stringify(authState));
};

const authSlice = createSlice({
    name: "auth",
    initialState: loadAuthState(),
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            const { username, city } = action.payload;
            state.username = username;
            state.city = city;
            saveAuthState(state);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.city = "";
            saveAuthState(state);
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
