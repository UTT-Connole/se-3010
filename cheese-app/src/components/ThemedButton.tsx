import { Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from "react-native";

type ThemedButtonProps = Omit<PressableProps, "style"> & {
  title: string;
  color: string;
  style?: StyleProp<ViewStyle>;
};

export default function ThemedButton({ title, color, style, ...rest }: ThemedButtonProps) {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }, style]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});
