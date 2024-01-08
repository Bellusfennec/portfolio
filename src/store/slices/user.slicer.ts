import { getRandomNumberId } from "@/utils/randomId";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockUsers from "@/mock/users";

interface IUser {
  id?: string;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  status?: string;
  date?: string;
}

export const requestUser = createAsyncThunk("user/request", async (payload: IUser, { rejectWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createUser = createAsyncThunk("user/create", async (payload: IUser, { rejectWithValue }) => {
  try {
    const date: string = new Date().toISOString();
    payload = { ...payload, id: getRandomNumberId(), status: "active", date };
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk("user/update", async (payload: IUser, { rejectWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteUser = createAsyncThunk("user/delete", async (payload: string, { rejectWithValue }) => {
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
  entities: mockUsers,
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestUser.pending, setPending);
    builder.addCase(requestUser.rejected, setRejected);
    builder.addCase(requestUser.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.entities = payload;
    });
    builder.addCase(createUser.pending, setPending);
    builder.addCase(createUser.rejected, setRejected);
    builder.addCase(createUser.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.entities = [...state.entities, payload];
    });
    builder.addCase(updateUser.pending, setPending);
    builder.addCase(updateUser.rejected, setRejected);
    builder.addCase(updateUser.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      const index = state.entities.findIndex(f => f?.id === payload?.id);
      state.entities[index] = { ...state.entities[index], ...payload };
    });
    builder.addCase(deleteUser.pending, setPending);
    builder.addCase(deleteUser.rejected, setRejected);
    builder.addCase(deleteUser.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.entities = state.entities.filter(f => f?.id !== payload);
    });
  }
});

const { reducer: userReducer } = userSlice;

export const getUserList = () => (state: any) => state.user.entities;
export const getUserLoading = () => (state: any) => state.user.isLoading;
export const getUserError = () => (state: any) => state.user.error;

export default userReducer;
