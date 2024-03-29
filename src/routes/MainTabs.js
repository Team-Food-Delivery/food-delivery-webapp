import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StoresProvider } from '../contexts/StoresContext';

import MainStore from '../components/containers/MainStore';
import MainSearch from '../components/containers/MainSearch';
import StorePage from '../components/containers/StorePage';
import Account from '../components/containers/Account';
import ManageAddresses from "../components/pages/ManageAddresses";
import EditAddresses from "../components/pages/EditAddresses";
import ShoppingCart from '../components/containers/ShoppingCart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabStyles = {
  height: 65,
  top: 10,
  borderTopColor: 'transparent',
  borderTopLeftRadius: 25, 
  borderTopRightRadius: 25
}

const animationConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Tabs = () => {
  return (
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
        name="Search" 
        component={MainSearch} 
        options={{
          tabBarLabel: "Search",
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "#E32F45",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store-search" color={color} size={26} />
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
      <Tab.Screen 
          name="Shopping Cart" 
          component={ShoppingCart} 
          options={{
            tabBarLabel: "Shopping Cart",
            tabBarLabelPosition: "below-icon",
            tabBarActiveTintColor: "#E32F45",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart-outline" size={24} color={color} />
            )
          }}
      />
    </Tab.Navigator>
  )
}

const MainTabs = () => {
  return (
    <StoresProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen 
            name="Store Page"
            component={StorePage}
            options={{
              headerTitle: "",
              transitionSpec: {
                open: animationConfig,
                close: animationConfig,
              },
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen 
            name="ManageAddresses"
            component={ManageAddresses}
            options={{
              headerTitle: "",
              gestureDirection: 'vertical',
              transitionSpec: {
                open: animationConfig,
                close: animationConfig,
              },
            }}
          />
          <Stack.Screen 
            name="EditAddress"
            component={EditAddresses}
            options={{
              headerTitle: "Save Address",
              transitionSpec: {
                open: animationConfig,
                close: animationConfig,
              },
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </StoresProvider>
  )
}

export default MainTabs;