import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter/slice";
import authReducer from "./auth/auth-slice";
import { contactsApi } from "./contacts/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer,
    },

    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), contactsApi.middleware
  ],
    // devTools: process.en
});


export const persistor = persistStore(store);