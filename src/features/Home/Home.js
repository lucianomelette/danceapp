import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";

import DTitle from "../../components/DTitle";
import DButton from "../../components/DButton";

import { openDatabase, createTable, getAlumnos } from "../../repository/SQLite/db"
import { cargarAlumnos } from "../../repository/Redux/alumnosSlice"
import { useDispatch } from "react-redux";

const db = openDatabase();

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const handleInscribirAlumno = () => {
    navigation.navigate("InscribirAlumno");
  };

  const handleListaAlumnos = () => {
    navigation.navigate("ListaAlumnos");
  };

  const handleCargarAlumnos = alumnos => {
    console.log("alumnos (cargarAlumnos):", alumnos)
    dispatch(cargarAlumnos(alumnos))
  }

  useEffect(() => {
    try {
      db.transaction((tx) => createTable(tx));
      db.transaction((tx) => getAlumnos(tx, handleCargarAlumnos));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <DTitle>Elegí una opción:</DTitle>

      <DButton onPress={handleInscribirAlumno} style={{marginTop: 20}}>Inscribir alumno</DButton>
      <DButton onPress={handleListaAlumnos} style={{marginTop: 20}}>Ver lista de alumnos</DButton>

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
});
