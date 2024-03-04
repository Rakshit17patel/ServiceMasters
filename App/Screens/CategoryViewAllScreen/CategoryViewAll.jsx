import { View, Text,FlatList, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import PageHeading from '../../Components/PageHeading';
import Colors from '../../Utils/Colors';
import {useNavigation} from '@react-navigation/native'






export default function CategoryViewAll({route}) {
  const data=route?.params;
  const navigation=useNavigation();
  return (
    <View style={{padding:20,paddingTop:30}}>
 <PageHeading title={"Categories"} /> 
 <FlatList
      data={data}
      style={{marginTop:15}}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>(
<TouchableOpacity style={styles.container}
        onPress={()=>navigation.push('business-list',{
          category:item.name
        })}>

        <View style={styles.container}>
          <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}} 
                    style={{width:30,height:30}}
                    />
                   
        </View>
        <View style = {styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
        </View>
        </View>
        </TouchableOpacity>

      )}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',flexDirection: 'row',
        marginLeft:15,
        marginBottom:10,

  },
  iconContainer:{
    backgroundColor:Colors.LIGHT_GRAY,
    padding:17,
    borderRadius:99
  },
  nameContainer:{
    flex:8,
    marginLeft:10,
    paddingLeft:10,
  },
  name:{
    fontWeight:'bold',
    fontSize:20,
  }
})