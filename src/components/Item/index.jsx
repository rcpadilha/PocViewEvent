import { Text, View } from "react-native"
import Styles from './styles'

const Item = ({ text }) => {
  return (
    <View style={Styles.item}>
      <Text>{text}</Text>
    </View>
  )
}

export default Item