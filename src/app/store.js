import { configureStore } from '@reduxjs/toolkit'
import alumnosReducer from '../repository/Redux/alumnosSlice'

export default configureStore({
  reducer: {
    alumnos: alumnosReducer,
  },
})