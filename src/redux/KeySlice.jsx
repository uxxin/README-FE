import {createSlice} from '@reduxjs/toolkit'

const keysSlice = createSlice({
  name: 'keys',
  initialState: {
    count: 0,
    members: [] 
  },
  reducers: {
    setKeysCount: (state, action) => {
      state.count = action.payload.count; // 숫자로 설정
      state.members = action.payload.members; // 배열로 설정
    },
    removeMember: (state, action) => {
      state.members = state.members.filter(member => member.nickname !== action.payload);
      state.count = state.members.length;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increment: (state) => {
      state.count += 1;
    }
  }
});

export const { setKeysCount,decrement,increment,removeMember } = keysSlice.actions;
export default keysSlice.reducer;