import { View, StyleSheet } from "react-native";
import {useEffect} from "react"

type CrackerProps = {
  color: string;
};

export default function Cracker({ color }: CrackerProps) {

  useEffect(() => {
    console.log("inside effect of cracker component")

    return(()=> {
      console.log('cleanup')
    })
  },[])

  useEffect(() => {
    console.log("color changed effect")
  }, [color])


  return <View style={[styles.cracker, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  cracker: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});
