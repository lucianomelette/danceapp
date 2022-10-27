import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { openDatabase, saveAlumno } from "../../repository/db";

import DButton from "./../shared/DButton";

const db = openDatabase();

export default function InscribirAlumno({ navigation, route }) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSave = () => {
    if (!nombre.trim() || !direccion.trim()) return;
    try {
      const newAlumno = {
        nombre,
        direccion,
      };
      
      console.log("insert new student");
      db.transaction((tx) => saveAlumno(tx, newAlumno));

      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nombre}
        placeholder={"Nombre completo"}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        value={direccion}
        placeholder={"Dirección"}
        onChangeText={setDireccion}
      />

      <DButton onPress={handleSave}>Guardar</DButton>

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
