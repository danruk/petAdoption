import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import { db } from '../../config/FirebaseConfig';

export default function Slider() {
    const[sliderList,setSliderList]= useState([]);
    useEffect(()=> {
        GetSliders();
    },[])
const GetSliders = async () => {
    const snapshots= await getDocs(collection(db, 'sliders'));
    const sliders=[];
    snapshots.forEach((doc) => {
   sliders.push(doc.data());
});
setSliderList(sliders);
}

  return (
    <View style={{
        marginTop: 15,
    }}>
<FlatList
data={sliderList}
horizontal={true}
showsHorizontalScrollIndicator={false}
renderItem={({ item,index}) => (
    <View>
        <Image source={{uri:item?.imageUrl}}
        style={styles.sliderImage}/>
</View>
  )}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:Dimensions.get('screen').width*0.9,
        height:170,
        borderRadius:15,
        marginRight:15
    }
})