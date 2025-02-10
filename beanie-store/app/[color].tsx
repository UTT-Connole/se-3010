import {View, Text} from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const Color = () => {
    const { color } = useLocalSearchParams();
  console.log(color)
  return (
    <View>
      <Text>Color: {color}</Text>
    </View>
  )
}

export default Color;