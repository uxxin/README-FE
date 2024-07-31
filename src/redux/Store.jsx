import { configureStore } from '@reduxjs/toolkit';
import keysReducer from './KeySlice'

export const store = configureStore({
    reducer: {
      keys: keysReducer
    }
  });