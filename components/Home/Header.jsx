import { Image, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
       justifyContent:'space-between',
        alignItems:'center',
    }}>
        <View>
      <Text style={{
        fontFamily:'outfit',
        fontSize:18
      }}>Welcome,</Text>
    <Text style={{
        fontFamily:'outfit-medium',
        fontSize:25,
    }}>Dan</Text>
        </View>
    <Image source={require('../../assets/images/profilePic.jpg')}
     style={{width:40,height:40,borderRadius:99}}/>
    </View>
  )
}