import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";


import ThemedButton from "@/components/ThemedButton";

export default function Index() {
  const [myName, setMyName] = useState("Dom");
  const [color, setColor] = useState("blue");

  const changeName = () => {
    setMyName("Brayden");
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>{myName} loves Cheese</Text>
        <Text style={styles.subtitle}>So does the class</Text>

        <ThemedButton
          title="Press Me to change the name"
          color={color}
          onPress={changeName}
          style={styles.button}
        />
        <ThemedButton
          title="Press Me to change the color to red"
          color={color}
          onPress={()=> setColor("red")}
          style={styles.button}
        />
        <ThemedButton
          title="Press Me to change the cheese to blue"
          color={color}
          onPress={()=> setColor("blue")}
          style={styles.button}
        />

        <ThemedButton
          title="Not in the context"
          color={color}
          onPress={()=> setColor("green")}
          style={styles.button}
        />

        <Link href="/crackers" style={styles.link}>
          Do crackers go with cheese?
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f0e6",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2b2b2b",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#7a7a7a",
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  link: {
    marginTop: 16,
    fontSize: 14,
    color: "#3c87f7",
  },
});
