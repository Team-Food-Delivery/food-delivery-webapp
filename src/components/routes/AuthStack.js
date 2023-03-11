import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Verification from "../containers/Verification";
import HomeScreen from "../pages/HomeScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  )
}

export default AuthStack;