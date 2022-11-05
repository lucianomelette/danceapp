import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={styles.label}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#f4ed23",
    padding: 10,
  },
  label: {
    fontWeight: "800",
  },
});
