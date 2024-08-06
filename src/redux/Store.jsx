import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 기본 로컬 스토리지
import { combineReducers } from 'redux'; // combineReducers 임포트
import keysReducer from './KeySlice';
import NoticeReducer from './Notice/NoticeReducer';

// 리듀서 결합
const rootReducer = combineReducers({
  keys: keysReducer,
  notice: NoticeReducer,
});

// persistConfig 설정
const persistConfig = {
  key: 'root', // 스토어의 키
  storage, // 상태를 저장할 스토리지
};

// 리듀서를 persistReducer로 감싸기
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 생성
export const store = configureStore({
  reducer: persistedReducer,
});

// persistor 생성
export const persistor = persistStore(store);
