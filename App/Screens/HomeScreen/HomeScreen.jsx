import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'
import {useNavigation} from '@react-navigation/native';



export default function HomeScreen() {
  const navigation=useNavigation();

  const search =(keyword)=>{
      navigation.navigate('business-view-all',keyword);
  }
  
  return (
    <>
          {/* Header  */}

      <Header search={search}/>

    <ScrollView
    showsVerticalScrollIndicator={false}>
      <View style={{padding:20}}>
        {/* Slider  */}
        <Slider/>
        {/* Categories  */}
        <Categories/>
        {/* Business List  */}
        <BusinessList/>
      </View>
    
    </ScrollView>
    </>

  )
}