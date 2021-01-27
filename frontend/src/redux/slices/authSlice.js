import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name:'auth',
    initialState:{
        accessToken: '',
        refreshToken: ''
    },
    reducers:{
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        resetTokens: state => {
            state.accessToken = '';
            state.refreshToken = '';
        }
        
    }
})

export const {setTokens} = authSlice.actions;

export default authSlice.reducer;