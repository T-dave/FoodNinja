import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/Home';
import Onboard from './src/screens/Home/Onboard';
import Onboard2 from './src/screens/Home/Onboard2';
import LogIn from './src/screens/Auth/LogIn';
import Register from './src/screens/Auth/Register';
import Bio1 from './src/screens/Bio/Bio1';
import BioPayment from './src/screens/Bio/BioPayment';
import BioPhoto from './src/screens/Bio/BioPhoto';
import BioPhoto2 from './src/screens/Bio/BioPhoto2';
import BioLocation from './src/screens/Bio/BioLocation';
import BioSuccess from './src/screens/Bio/BioSuccess';
import ResetSuccess from './src/screens/Reset/ResetSuccess';
import Pin from './src/screens/Reset/Pin';
import PinType from './src/screens/Reset/PinType';
import Reset from './src/screens/Reset/Reset';

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
          <Stack.Screen name="Bio1" component={Bio1} />
          <Stack.Screen name="BioPayment" component={BioPayment} />
          <Stack.Screen name="BioPhoto" component={BioPhoto} />
          <Stack.Screen name="BioPhoto2" component={BioPhoto2} />
          <Stack.Screen name="BioLocation" component={BioLocation} />
          <Stack.Screen name="BioSuccess" component={BioSuccess} />
          <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
          <Stack.Screen name="Pin" component={Pin} />
          <Stack.Screen name="PinType" component={PinType} />
          <Stack.Screen name="Reset" component={Reset} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}