// Importing React and necessary components from React Navigation
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importing screens for navigation
import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';


// Create a stack navigator
const Stack = createStackNavigator();

// Define the main stack navigator, which will manage screens in a stack
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold', // Bold font weight for header title
          textAlign: 'center', // Center align the header title
          alignSelf: 'center', // Align self to center for proper positioning
          flex: 1, // Flex property for flexible layout
        },
      }}
    >
      {/* Stack Screen for Home */}
      <Stack.Screen name='Home' component={HomeScreen} />
           {/* Stack Screen for Categories */}
      <Stack.Screen name='Categories' component={CategoriesScreen}/>

    </Stack.Navigator>
  );
}

// Create a drawer navigator
const Drawer = createDrawerNavigator();

// Define the drawer navigation stack
function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition='left' // Drawer opens from the left side
      initialRouteName='Main' // The initial route when the drawer is opened
      drawerStyle={{
        width: 250 // Width of the drawer
      }}
      screenOptions={{ headerShown: false }} // Hides the header
      drawerContent={({navigation}) => <DrawerContainer navigation={navigation}/>} // Custom drawer content
    >
      {/* Drawer Screen for Main Navigator */}
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  );
}

// Main App Container that wraps the whole app navigation
export default function AppContainer() {
  return (
    <NavigationContainer>
      {/* Drawer navigation as the root navigator */}
      <DrawerStack/>
    </NavigationContainer>
  );
}

// Disable yellow box warnings in the app
console.disableYellowBox = true;
