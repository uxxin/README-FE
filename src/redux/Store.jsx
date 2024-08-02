import { configureStore } from '@reduxjs/toolkit';
import keysReducer from './KeySlice';
import NoticeReducer from './Notice/NoticeReducer';

export const store = configureStore({
  reducer: {
    keys: keysReducer,
    notice: NoticeReducer,
  },
});
