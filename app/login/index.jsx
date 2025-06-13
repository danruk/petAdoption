import { Image, Text, View } from 'react-native'

export default function LoginScreen() {
  return (
    <View>
  <Image source={require('../../assets/images/login.png')} style={{width:'100%', height:500}}/>
  <View style={{
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  }}>
    <Text style={{
      fontFamily: 'outfit-bold',
      fontSize: 30,
    }}>Ready to make a new friend?</Text>
  </View>
    </View>
  )
}