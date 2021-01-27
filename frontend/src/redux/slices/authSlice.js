import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name:'auth',
    initialState:{
        accessToken: '228',
        refreshToken: ''
    },
    reducers:{
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken 
        }
        
    }
})

export const {setTokens} = authSlice.actions;

export default authSlice.reducer;