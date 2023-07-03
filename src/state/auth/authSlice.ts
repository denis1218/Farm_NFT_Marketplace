import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: {
  user: any
} = {
  user: null
}

export const authSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer
