import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/features/Home/Home";
import InscribirAlumnoScreen from "./src/features/InscripcionAlumnos/InscribirAlumno";
import TomarFotoAlumnoScreen from "./src/features/InscripcionAlumnos/TomarFotoAlumno";
import ListaAlumnosScreen from "./src/features/ListadoAlumnos/ListaAlumnos";

import store from './src/app/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
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
            name="TomarFotoAlumno"
            component={TomarFotoAlumnoScreen}
            options={{ title: "Foto del Alumno" }}
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
