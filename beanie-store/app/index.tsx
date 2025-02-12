import { Text, View, Button, ToastAndroid, Platform, Alert } from "react-native";
import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';

import { Link } from 'expo-router'


const storeName = "Beanie Store"

const Beanie = ({ color, hank }: { color: string; hank?: string }) => {
  return (
    <Text style={{marginBottom: 5}}>My {color} Beanie by {hank}</Text>
  )
}

const beanies = [
  {color: 'Red', hank: 'Aaron'},
  {color: 'Blue', hank: 'Green'},
  {color: 'Nick', hank: 'Smith'},
  {color: 'Orange', hank: 'Greene'},
  {color: 'Brown', hank: 'The Cow Dog'},
  {color: 'Brayden'},
]

const BeanieStore = ({numberOfSocks=40, beanieBank=beanies}: {numberOfSocks: number, beanieBank:typeof beanies}) => {

  const [version, setVersion] = useState(5)

  useEffect(() => {
    if (version > 10) {
      ToastAndroid.show('Version is too high', ToastAndroid.LONG)
      setVersion(0)
    } else if (version < 0) {
      setVersion(10)
    }

  }, [version])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <StatusBar backgroundColor="#a0522d"/>

      <Text>Welcome to {storeName} v{version}</Text>
      <Text>We have {numberOfSocks} socks!</Text>
      {beanieBank.map((beanie, index) => (
        <Beanie key={index} color={beanie.color} hank={beanie.hank} />
        ))}

      <Button
      onPress={() => setVersion(version + 1)}
      title="Button"
      color="#d2691e"
      />
      <Link href="/cowboyhat" asChild><Text>Check out our Cowboy hats</Text></Link>
      <Link href="/blue" asChild><Text>Blue</Text></Link>
      <Link href="/Brycen" asChild><Text>Brycen</Text></Link>
      <Link href="/cowboy/hats" asChild><Text>Check out our Cowboy hats</Text></Link>

    </View>
  );
}

export default BeanieStore;