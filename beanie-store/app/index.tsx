import { Text, View } from "react-native";


const storeName = "Beanie Store v1"

const Beanie = (props: any) => {
  return(
      <Text>My {props.color} Beanie</Text>
  )
}

const BeanieStore = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to {storeName}</Text>
      <Beanie color="Red"/>
      <Beanie color="Blue"/>
      <Beanie color="Something"/>
      <Beanie color="Red"/>
    </View>
  );
}

export default BeanieStore;