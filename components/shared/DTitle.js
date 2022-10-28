import { Text, StyleSheet } from "react-native";

export default function DTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 40,
  },
});
