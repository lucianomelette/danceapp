import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux'
import { useState } from "react";

import { openDatabase, saveAlumno } from "../../repository/SQLite/db";
import { inscribirAlumno } from '../../repository/Redux/alumnosSlice'

import DButton from "../../components/DButton"

const db = openDatabase();

export default function InscribirAlumno({ navigation }) {
  const [alumno, setAlumno] = useState({
    nombre: '',
    direccion: '',
  })

  const dispatch = useDispatch()

  const handleChangeNombre = nombre => {
    setAlumno({...alumno, nombre })
  }

  const handleChangeDireccion = direccion => {
    setAlumno({...alumno, direccion })
  }

  const handleSave = () => {
    
    if (alumno.nombre.trim() === '' || alumno.direccion.trim() === '') {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      console.log("insert new student");
      db.transaction((tx) => id = saveAlumno(tx, alumno,
        id => dispatch(inscribirAlumno({ ...alumno, id }))
      ));

      setAlumno({ ...alumno, nombre: '', direccion: '' })
    } catch (error) {
      console.error(error);
    }
  };

  const handleTakePic = () => {
    navigation.navigate("TomarFotoAlumno")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={alumno.nombre}
        placeholder={"Nombre"}
        onChangeText={handleChangeNombre}
      />

      <TextInput
        style={styles.input}
        value={alumno.direccion}
        placeholder={"Dirección"}
        onChangeText={handleChangeDireccion}
      />

      <DButton onPress={handleSave}>Guardar</DButton>

      <DButton onPress={handleTakePic} style={{marginTop: 20}}>Tomar Foto</DButton>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
