import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerificationContainer from './src/components/containers/VerificationContainer';
import HomeScreen from "./src/components/pages/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VerificationContainer">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Verification" component={VerificationContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
