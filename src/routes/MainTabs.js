import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StoresProvider } from '../contexts/StoresContext';
import { AuthContext } from '../contexts/AuthContext';

import MainStore from '../components/containers/MainStore';

const Tab = createBottomTabNavigator();

const Account = () => {
  const { setLogout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity 
        onPress={setLogout}
        style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD', 
          padding: 10
      }}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const tabStyles = {
  height: 65,
  top: 10,
  borderTopColor: 'transparent',
  borderTopLeftRadius: 25, 
  borderTopRightRadius: 25
}

const MainTabs = () => {
  return (
    <StoresProvider>
      <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: tabStyles,
          tabBarLabelStyle: { fontSize: 11 }
      }}>
        <Tab.Screen 
          name="Home" 
          component={MainStore} 
          options={{
            tabBarLabel: "Home",
            tabBarLabelPosition: "below-icon",
            tabBarActiveTintColor: "#E32F45",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={Account} 
          options={{
            tabBarLabel: "Account",
            tabBarLabelPosition: "below-icon",
            tabBarActiveTintColor: "#E32F45",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </StoresProvider>
  )
}

export default MainTabs;