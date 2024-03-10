/*
 redux toolkit
 - 리덕스를 편하게 사용할 수 있도록 도와주는 라이브러리(도구)
 - slice : 리덕스는 상태를 객체 하나에 저장하는데, 여러개의 slice로 상태객체를 구성할 수 있다.
*/

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});