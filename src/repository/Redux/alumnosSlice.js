import { createSlice } from '@reduxjs/toolkit'

export const alumnosSlice = createSlice({
  name: 'alumnos',
  initialState: {
    alumnos: []
  },
  reducers: {
    cargarAlumnos: (state, action) => {
      state.alumnos = [...action.payload];
      console.log("cargarAlumnos (state):", state)
    },
    inscribirAlumno: (state, action) => {
      state.alumnos.push(action.payload)
    },
    borrarAlumno: (state, action) => {
      const alumno = state.alumnos.findIndex(a => a.id === action.payload)
      if (alumno === -1) return
      state.alumnos.splice(alumno, 1)
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
export const { cargarAlumnos, inscribirAlumno, borrarAlumno } = alumnosSlice.actions

export const selectAlumnos = (state) => state.alumnos.alumnos

export default alumnosSlice.reducer