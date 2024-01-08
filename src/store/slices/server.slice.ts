import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mockServers from '@/mock/servers'
import { getRandomNumberId } from '@/utils/randomId'

interface IServer {
  id?: string
  name: string
  status?: string
  city?: string
  date?: string
}

export const requestServer = createAsyncThunk(
  'server/request',
  async (payload: IServer, { rejectWithValue }) => {
    try {
      return payload
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const createServer = createAsyncThunk(
  'server/create',
  async (payload: IServer, { rejectWithValue }) => {
    try {
      const date: string = new Date().toISOString()
      payload = { ...payload, id: getRandomNumberId(), status: 'active', date }
      return payload
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const updateServer = createAsyncThunk(
  'server/update',
  async (payload: IServer, { rejectWithValue }) => {
    try {
      return payload
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteServer = createAsyncThunk(
  'server/delete',
  async (payload: string, { rejectWithValue }) => {
    try {
      return payload
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const setPending = (state: any) => {
  state.isLoading = true
  state.error = null
}
const setRejected = (state: any, { payload }: any) => {
  state.isLoading = false
  state.error = payload
}

const initialState = {
  entities: mockServers,
  isLoading: false,
  error: null,
}

const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestServer.pending, setPending)
    builder.addCase(requestServer.rejected, setRejected)
    builder.addCase(requestServer.fulfilled, (state, { payload }: any) => {
      state.isLoading = false
      state.entities = payload
    })
    builder.addCase(createServer.pending, setPending)
    builder.addCase(createServer.rejected, setRejected)
    builder.addCase(createServer.fulfilled, (state, { payload }: any) => {
      state.isLoading = false
      state.entities = [...state.entities, payload]
    })
    builder.addCase(updateServer.pending, setPending)
    builder.addCase(updateServer.rejected, setRejected)
    builder.addCase(updateServer.fulfilled, (state, { payload }: any) => {
      state.isLoading = false
      const index = state.entities.findIndex(f => f?.id === payload?.id)
      state.entities[index] = { ...state.entities[index], ...payload }
    })
    builder.addCase(deleteServer.pending, setPending)
    builder.addCase(deleteServer.rejected, setRejected)
    builder.addCase(deleteServer.fulfilled, (state, { payload }: any) => {
      state.isLoading = false
      state.entities = state.entities.filter(f => f?.id !== payload)
    })
  },
})

const { reducer: serverReducer } = serverSlice

export const getServerList = () => (state: any) => state.server.entities
export const getServerLoading = () => (state: any) => state.server.isLoading
export const getServerError = () => (state: any) => state.server.error

export default serverReducer
