import { configureStore } from '@reduxjs/toolkit'
import alumnosReducer from '../features/alumnos/alumnosSlice'

export default configureStore({
  reducer: {
    alumnos: alumnosReducer,
  },
})