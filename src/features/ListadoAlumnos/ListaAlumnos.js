import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DButton from "../../components/DButton";

import { selectAlumnos, borrarAlumno } from "../../repository/Redux/alumnosSlice";
import { openDatabase, deleteAlumno } from "../../repository/SQLite/db";

const db = openDatabase();

export default function ListaAlumnos() {
  const alumnos = useSelector(selectAlumnos)
  const dispatch = useDispatch();

  const handleDelete = id => {
    try {
      db.transaction((tx) => deleteAlumno(tx, id));
      dispatch(borrarAlumno(id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          <View style={styles.row}>
            <Text style={[styles.text, {flexGrow: 1}]}>{item.id}</Text>
            <Text style={[styles.text, {flexGrow: 2}]}>{item.nombre}</Text>
            <Text style={[styles.text, {flexGrow: 2}]}>{item.direccion}</Text>
            <DButton style={{margin: 2}} onPress={() => handleDelete(item.id)}>X</DButton>
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
    alignItems: "center",
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 30,
  }
});
