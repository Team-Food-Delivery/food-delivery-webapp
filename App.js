import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Verification from './src/components/containers/Verification';
import HomeScreen from "./src/components/pages/HomeScreen";
import LoginSignUp from './src/components/containers/LoginSignUp';
import { AuthProvider } from './src/contexts/AuthContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Verification">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginSignUp" component={LoginSignUp} />
          <Stack.Screen name="Verification" component={Verification} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
