import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.label}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#f4ed23",
    padding: 10,
  },
  label: {
    fontWeight: "800",
  },
});
