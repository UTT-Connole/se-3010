import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState, useContext } from "react"

import Cracker from "@/components/Cracker";
import ThemedButton from "@/components/ThemedButton";
import { CheeseContext } from "@/contexts/CheeseContext";

export default function Crackers() {
  const [crackerColor, setCrackerColor] = useState("#d9b166");
  const [crackerColor2, setCrackerColor2] = useState("#d9b166");
  const [showSecondCracker, setShowSecondCracker] = useState(true);

  const {setCheese} = useContext(CheeseContext)


  useEffect(() => {
    console.log('useEffect in Crackers')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Do crackers go with cheese?</Text>
        <Text style={styles.subtitle}>Yes, absolutely.</Text>

        <Cracker color={crackerColor} />
        {showSecondCracker && <Cracker color={crackerColor2} />}

        <ThemedButton
          title="Make it red"
          color="#c0392b"
          onPress={() => setCrackerColor("#c0392b")}
          style={styles.button}
        />
        <ThemedButton
          title="Make it tan"
          color="#d9b166"
          onPress={() => setCrackerColor("#d9b166")}
          style={styles.button}
        />
        <ThemedButton
          title="Remove a cracker"
          color="#555"
          onPress={() => setShowSecondCracker(false)}
          style={styles.button}
        />
        <ThemedButton
          title="Make it american"
          color="#c0392b"
          onPress={() => setCheese("american")}
          style={styles.button}
        />
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
  },
  button: {
    marginTop: 8,
  },
});
