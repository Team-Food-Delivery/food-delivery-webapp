import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStore from '../../components/containers/MainStore';

const Stack = createNativeStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Store" component={MainStore} />
    </Stack.Navigator>
  )
}

export default StoreStack;