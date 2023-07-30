import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native'

import ListCard from '../components/ListCard'

import jacket from "../assets/list_images/jacket.jpg"
export default function ListScreen() {

  return (
    <View style={styles.container}>
         <ListCard photo={jacket} subTitle="$300" title="red jacket for sale!"/>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent:"flex-start",
    marginTop: StatusBar.currentHeight + 10,
    minHeight: "100%",
    padding: 30,
    width: "100%",
    backgroundColor:"#F8F4F4"
  },
  
})