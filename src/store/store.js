import { configureStore } from '@reduxjs/toolkit'
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import homeSlice from './homeSlice'

export const store = configureStore({
  reducer: {
    home:homeSlice
  },
})