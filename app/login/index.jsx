import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      height:'100%',
    }}>
  <Image source={require('../../assets/images/login.png')} style={{width:'100%', height:500}}/> 
  <View style={{
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  }}>
    <Text style={{
      fontFamily: 'outfit-bold',
      fontSize: 30,
      textAlign: 'center',
    }}>Ready to make a new friend?</Text>
    <Text style={{
      fontSize: 18,
      textAlign: 'center',
      fontFamily:'outfit',
      color:Colors.GRAY
      }}>Let's adopt the pet which you like and make their lives happy again</Text>
      <Pressable 
      style={{
       padding:14,
        marginTop:100,
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        borderRadius:14,
      }}
      onPress={() => router.replace('/(tabs)/home')}
      >
        <Text
        style={{
          fontFamily: 'outfit-medium',
          fontSize: 20,
          textAlign: 'center',
        }}
        >Get Started</Text>
      </Pressable>
  </View>
      </View>
  )
}