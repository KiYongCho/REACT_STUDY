import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  value: 0
};

// slice 생성
export const counterSlice = createSlice({
  name: 'counter', // slice의 이름
  initialState,        // 초기 상태
  reducers: {       // 리듀서
    // increment 액션
    increment: state => {
      state.value += 1;
    },
    // decrement 액션    
    decrement: state => {
      state.value -= 1;
    }
  }
});

// 액션 익스포트
export const { increment, decrement } = counterSlice.actions;

// 리듀서 익스포트
export default counterSlice.reducer;