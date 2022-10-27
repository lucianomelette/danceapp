import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import DTitle from "./../shared/DTitle";
import DButton from "./../shared/DButton";

export default function Home({ navigation, route }) {
  console.log("route:", route);

  const handleInscribirAlumno = () => {
    navigation.navigate("InscribirAlumno");
  };

  const handleListaAlumnos = () => {
    navigation.navigate("ListaAlumnos");
  };

  return (
    <View style={styles.container}>
      <DTitle>Elegí una opción:</DTitle>

      <DButton onPress={handleInscribirAlumno}>Inscribir alumno</DButton>

      <DButton onPress={handleListaAlumnos}>Ver lista de alumnos</DButton>

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
