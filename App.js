import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/Home';
import Onboard from './src/screens/Home/Onboard';
import Onboard2 from './src/screens/Home/Onboard2';
import LogIn from './src/screens/Auth/LogIn';
import Register from './src/screens/Auth/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Onboard2" component={Onboard2} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}