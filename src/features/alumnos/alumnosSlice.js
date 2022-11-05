import { createSlice } from '@reduxjs/toolkit'

export const alumnosSlice = createSlice({
  name: 'alumnos',
  initialState: {
    nombre: "",
    edad: 0
  },
  reducers: {
    inscribirAlumno: (state, action) => {
      state.nombre = action.payload.nombre;
      state.edad = action.payload.edad;
    },
    borrarAlumno: (state) => {
      state.nombre = "";
      state.edad = 0;
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { inscribirAlumno } = alumnosSlice.actions
export const { increment, decrement, incrementByAmount } = alumnosSlice.actions

export default alumnosSlice.reducer