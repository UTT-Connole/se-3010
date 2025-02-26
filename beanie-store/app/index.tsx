import { Text, View, Button, FlatList, ToastAndroid, Platform, Alert, ScrollView, Image } from "react-native";
import {useState, useEffect, useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import BeanieLink from "@/components/BeanieLink";
 
import ThemeContext from "@/contexts/ThemeContext";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



const storeName = "Beanie Store"

const Beanie = ({ color, hank }: { color: string; hank?: string }) => {
  const {theme} = useContext(ThemeContext)

  return (
    <>
    <Text style={{marginBottom: 5}}>My {color} Beanie by {hank}</Text>
    <FontAwesome5 name="hat-cowboy" size={24} color={theme} />
    </>
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

const generateBeanies = (numberOfBeanies: number) => {
  const newBeanies = []
  for (let i = 0; i < numberOfBeanies; i++) {
    newBeanies.push({color: 'Blue', hank: 'Green', id: i})
    console.log(i)
  }
  return newBeanies
}


const BeanieStore = ({numberOfSocks=40, beanieBank=beanies}: {numberOfSocks: number, beanieBank:typeof beanies}) => {

  const {theme, setTheme} = useContext(ThemeContext)
  const beanies2 = generateBeanies(2)  
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

      <Button title="ToggleTheme" color={theme === 'orange' ? 'orange' : 'green'} onPress={()=>setTheme('green')}/>

      <Text>Welcome to {storeName} v{version}</Text>
      <Text>We have {numberOfSocks} socks!</Text>
      <Button
      onPress={() => setVersion(version + 1)}
      title="Button"
      color="#d2691e"
      />

    <BeanieLink href="/cowboyhat" text="Check out our Cowboy hats"/>
    <FlatList
        data={beanies2}
        renderItem={(beanie) => <Beanie color={beanie.color} hank={beanie.hank} />}
        keyExtractor={beanie => beanie.id}
      />
      <BeanieLink href="/cowboyhat" text="Check out our Cowboy hats"/>

    </View>
  );
}

export default BeanieStore;