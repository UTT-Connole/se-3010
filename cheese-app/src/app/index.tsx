import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function Index() {

  const [myName, setMyName] = useState("Dom")

  console.log(myName)

  const changeName = () => {
    console.log(myName)
    setMyName("Brayden")
    console.log(myName)
  }

  return (
    <View style={styles.container}>
      <Text>{myName} loves Cheese</Text>
      <Text>So does the class</Text>

    <Pressable onPress={changeName}><Text>Press Me to change the name</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
