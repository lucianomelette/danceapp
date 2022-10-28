import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAlumnos, openDatabase } from "../../repository/db";

const db = openDatabase();

export default function ListaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    try {
      db.transaction((tx) => {
        getAlumnos(tx, setAlumnos);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    console.log("alumnos:", alumnos);
  }, [alumnos]);

  return (
    <View style={styles.container}>
      <FlatList
        data={alumnos}
        renderItem={({item}) =>
          <View style={styles.row}>
            <Text style={[styles.text, {flexGrow: 1}]}>{item.id}</Text>
            <Text style={[styles.text, {flexGrow: 2}]}>{item.nombre}</Text>
            <Text style={[styles.text, {flexGrow: 2}]}>{item.direccion}</Text>
          </View>
        }>
      </FlatList>

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
  row: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 30,
  }
});
