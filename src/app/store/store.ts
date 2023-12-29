import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user.slicer'
import { logger } from './middleware/logger'

const rootReducer = combineReducers({
  user: userReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: import.meta.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch

export default store
