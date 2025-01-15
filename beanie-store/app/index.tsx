import { Text, View, Button, ToastAndroid, Platform, Alert } from "react-native";
import {useState, useEffect} from 'react'


const storeName = "Beanie Store"

const Beanie = ({ color, hank }: { color: string; hank?: string }) => {
  return (
    <Text>My {color} Beanie by {hank}</Text>
  )
}

const BeanieStore = () => {

  const [version, setVersion] = useState(0)

  useEffect(() => {
    console.log('BeanieStore mounted')
  }, [])

  useEffect(() => {
    console.log('the new version is ', version)
    if (version > 10) {
      ToastAndroid.show('Version is too high', ToastAndroid.LONG)
      setVersion(0)
    } else if (version < 0) {
      setVersion(10)
    }

  }, [version])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to {storeName} v{version}</Text>
      <Beanie color="Red" hank="Aaron"/>
      <Beanie color="Blue" hank="Green"/>
      <Beanie color="Nick" hank="Smith"/>
      <Beanie color="Brayden"/>
      <Button
        onPress={() => setVersion(version + 1)}
        title="Button"
        color="#841584"
      />

    </View>
  );
}

export default BeanieStore;