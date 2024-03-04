import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function Heading({text,isViewAll=false,onPress}) {
  return (
    <View style={styles.container}>
       <Text style={styles.heading}>
        {text}
       </Text>
      {isViewAll&& <TouchableWithoutFeedback onPress={onPress}>
      <Text style={{color:Colors.PRIMARY}}>View All</Text></TouchableWithoutFeedback>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    heading:{
        fontSize:20,
        fontFamily:'outfit-medium',
        marginBottom:10
    },
})