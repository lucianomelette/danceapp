import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { inscribirAlumno } from './alumnosSlice'

import DButton from "./../../../components/shared/DButton"
import { useState } from "react";

export default function InscribirAlumnoRedux({ navigation, route }) {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)

  const nombreRedux = useSelector((state) => state.alumnos.nombre);
  const edadRedux = useSelector((state) => state.alumnos.edad);

  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(inscribirAlumno({
      nombre: nombre,
      edad: edad,
    }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nombre}
        placeholder={"Nombre"}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        value={edad}
        placeholder={"Edad"}
        onChangeText={setEdad}
      />

      <DButton onPress={handleSave}>Guardar</DButton>

      <Text>Nombre: {nombreRedux}</Text>
      <Text>Edad: {edadRedux}</Text>

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
