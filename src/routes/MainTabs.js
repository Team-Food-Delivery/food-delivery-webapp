import { View, Text } from 'react-native';
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MainStore from '../components/containers/MainStore';

const Tab = createBottomTabNavigator();

const Account = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account</Text>
    </View>
  );
}

const tabStyles = {
  paddingBottom: 2, 
  borderTopLeftRadius: 25, 
  borderTopRightRadius: 25
}

const MainTabs = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: tabStyles,
        tabBarLabelStyle: { fontSize: 12 }
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
  )
}

export default MainTabs;