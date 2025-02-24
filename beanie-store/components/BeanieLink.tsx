import { Link } from 'expo-router'
import { Text } from 'react-native' 

const BeanieLink = ({ href,text }) => {
  return (
    <Link href={href}>
      <Text>{text}</Text>
    </Link>
  )
};

export default BeanieLink;