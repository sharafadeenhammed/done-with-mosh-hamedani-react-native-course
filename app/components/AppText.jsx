import {
  Text,
  StyleSheet
} from 'react-native'

export default function AppText({ text, style }) {
  return (
    <Text style={[ styles.text, style ]}>
      {text === undefined ? "pass in a text prop" : text}
    </Text>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400"

  }
})