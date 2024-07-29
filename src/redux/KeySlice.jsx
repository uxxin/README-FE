import {createSlice} from '@reduxjs/toolkit'


const keysSlice = createSlice({
  name: 'keys',
  initialState: {
    count: 0
  },
  reducers: {
    setKeysCount: (state, action) => {
      state.count = action.payload;
    }
  }
});

export const { setKeysCount } = keysSlice.actions;
export default keysSlice.reducer;