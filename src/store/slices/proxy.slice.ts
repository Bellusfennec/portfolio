import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockProxies from "@/mock/proxies";
import { getRandomNumberId } from "@/utils/randomId";

interface IProxy {
  id?: string;
  name: string;
  status?: string;
  city?: string;
  date?: string;
}

export const requestProxy = createAsyncThunk("proxy/request", async (payload: IProxy, { rejectWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createProxy = createAsyncThunk("proxy/create", async (payload: IProxy, { rejectWithValue }) => {
  try {
    const date: string = new Date().toISOString();
    payload = { ...payload, id: getRandomNumberId(), status: "active", city: "-", date };
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateProxy = createAsyncThunk("proxy/update", async (payload: IProxy, { rejectWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteProxy = createAsyncThunk("proxy/delete", async (payload: string, { rejectWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const setPending = (state: any) => {
  state.isLoading = true;
  state.error = null;
};
const setRejected = (state: any, { payload }: any) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  entities: mockProxies,
  isLoading: false,
  error: null
};

const proxySlice = createSlice({
  name: "proxy",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestProxy.pending, setPending);
    builder.addCase(requestProxy.rejected, setRejected);
    builder.addCase(requestProxy.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.entities = payload;
    });
    builder.addCase(createProxy.pending, setPending);
    builder.addCase(createProxy.rejected, setRejected);
    builder.addCase(createProxy.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.entities = [...state.entities, payload];
    });
    builder.addCase(updateProxy.pending, setPending);
    builder.addCase(updateProxy.rejected, setRejected);
    builder.addCase(updateProxy.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      const index = state.entities.findIndex(f => f?.id === payload?.id);
      state.entities[index] = { ...state.entities[index], ...payload };
    });
    builder.addCase(deleteProxy.pending, setPending);
    builder.addCase(deleteProxy.rejected, setRejected);
    builder.addCase(deleteProxy.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.entities = state.entities.filter(f => f?.id !== payload);
    });
  }
});

const { reducer: proxyReducer } = proxySlice;

export const getProxyList = () => (state: any) => state.proxy.entities;
export const getProxyLoading = () => (state: any) => state.proxy.isLoading;
export const getProxyError = () => (state: any) => state.proxy.error;

export default proxyReducer;
