import { Link } from 'expo-router'
import { Text } from 'react-native' 
import {useContext} from 'react'
import ThemeContext from "@/contexts/ThemeContext";

const BeanieLink = ({ href,text }) => {
  const {theme} = useContext(ThemeContext)

  return (
    <Link href={href}>
      <Text style={{ color: theme }}>{text}</Text>
    </Link>
  )
};

export default BeanieLink;