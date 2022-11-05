import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux'
import { inscribirAlumno } from '../../repository/Redux/alumnosSlice'
import { Camera } from 'react-native-vision-camera'

import DButton from "../../components/DButton"
import { useState } from "react";

export default function TomarFotoAlumno({ navigation, route }) {

  const devices = useCameraDevices()
  const device = devices.back

  const dispatch = useDispatch()

  useState(async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus()
    console.log("cameraPermission:", cameraPermission)
  }, [])

  return (
    <View style={styles.container}>

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
