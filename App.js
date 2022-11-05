import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";

import HomeScreen from "./components/alumnos/Home";
import InscribirAlumnoScreen from "./components/alumnos/InscribirAlumno";
import ListaAlumnosScreen from "./components/alumnos/ListaAlumnos";
import InscribirAlumnoReduxScreen from "./src/features/alumnos/InscribirAlumnoRedux";

import { openDatabase, createTable } from "./repository/db";

import store from './src/app/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const db = openDatabase();

export default function App() {

  useEffect(() => {
    db.transaction((tx) => createTable(tx));
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Bienvenido a Dance App" }}
          />
          <Stack.Screen
            name="InscribirAlumno"
            component={InscribirAlumnoScreen}
            options={{ title: "Inscripción de alumnos" }}
          />
          <Stack.Screen
            name="InscribirAlumnoRedux"
            component={InscribirAlumnoReduxScreen}
            options={{ title: "Inscripción de alumnos - Redux" }}
          />
          <Stack.Screen
            name="ListaAlumnos"
            component={ListaAlumnosScreen}
            options={{ title: "Lista de alumnos" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
