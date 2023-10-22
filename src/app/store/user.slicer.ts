import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import skills from '../../mockData/skills.json'

interface ISetUser {
  firstName: string
  email: string
  password: string
}

export const loadUser = createAsyncThunk('user/load', async (_, { rejectWithValue }) => {
  try {
    const data = { skills }
    return data
  } catch (error: any) {
    console.log(error)
    return rejectWithValue(error.message)
  }
})

const setPending = (state: { isLoading: boolean; error: null }) => {
  state.isLoading = true
  state.error = null
}
const setRejected = (state: { isLoading: boolean; error: null }) => {
  state.isLoading = false
  state.error = null
}

const initialState = {
  isLoading: false,
  currentUser: {},
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadUser.pending, setPending)
    builder.addCase(loadUser.fulfilled, (state: any, { payload }) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.currentUser = payload
    })
    builder.addCase(loadUser.rejected, setRejected)
  },
})

const { reducer: userReducer } = userSlice

export const getCurrentUser = () => (state: any) => state.user.currentUser
export const getUserLoadingStatus = () => (state: any) => state.user.isLoading
export const getUserError = () => (state: any) => state.user.error

export default userReducer
