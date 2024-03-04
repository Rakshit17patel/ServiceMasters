import { View, Text, FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import PageHeading from '../../Components/PageHeading';
import BusinessListItem from '../BusinesListByCategoryScreen/BusinessListItem';
import Colors from '../../Utils/Colors';
import GlobalApi from '../../Utils/GlobalApi'

export default function BusinessListViewAll({route}) {
    console.log(route)
    const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
        getBusinessList();
    },[])

    /**
     * Get Business List from API
     */
    const getBusinessList=()=>{
        route.params?
       GlobalApi.getBusinessListBySearchQuery(route.params).then(resp=>{
            console.log(resp);
            setBusinessList(resp.businessLists)
        }):GlobalApi.getBusinessList().then(resp=>{
            console.log(resp);
            setBusinessList(resp.businessLists)
        })
    }
    
  return (
    <View style={{padding:20,paddingTop:30}}>
      <PageHeading title={`Business`} />
    {businessList?.length>0?  <FlatList
      data={businessList}
      style={{marginTop:15}}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index})=>(
        <BusinessListItem business={item} />
      )}
     />:
     <Text style={{fontFamily:'outfit-medium',
     color:Colors.GRAY,
     fontSize:20,textAlign:'center',marginTop:'20%'}}>No Business Found</Text>}
    </View>
  )
}