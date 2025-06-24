import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      
      }}
    >
      <Link href={" /login"} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontFamily:'montserrat',fontSize:20}}>Go to login screen</Text>
      </Link>
    </View>
  );
}
