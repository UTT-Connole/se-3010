import {View, Text} from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const Color = () => {
    const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>Color: {slug}</Text>
    </View>
  )
}

export default Color;