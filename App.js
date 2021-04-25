import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Final from './screens/Final';
import Forest_Content from './screens/Forest_Content';
import Forest_Final from './screens/Forest_Final';
import Forest_Quiz from './screens/Forest_Quiz';
import Forest_Result from './screens/Forest_Result';
import Intro from './screens/Intro';
import Main from './screens/Main';
import Map from './screens/Map';
import Sky_Content from './screens/Sky_Content';
import Sky_Final from './screens/Sky_Final';
import Sky_Intro from './screens/Sky_Intro';
import Sky_Quiz1 from './screens/Sky_Quiz1';
import Sky_Quiz2 from './screens/Sky_Quiz2';
import Sky_Result1 from './screens/Sky_Result1';
import Sky_Result2 from './screens/Sky_Result2';
import Water_Content from './screens/Water_Content';
import Water_Final from './screens/Water_Final';
import Water_Quiz1 from './screens/Water_Quiz1';
import Water_Quiz2 from './screens/Water_Quiz2';
import Water_Result1 from './screens/Water_Result1';
import Water_Result2 from './screens/Water_Result2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ title: false }}
      >
        <Stack.Screen name="Main" component={Main} options={{ headerTransparent: true }} />
        <Stack.Screen name="Intro" component={Intro} options={{ headerTransparent: true }} />
        <Stack.Screen name="Map" component={Map} options={{ headerTransparent: true }} />

        <Stack.Screen name="Sky_Intro" component={Sky_Intro} options={{ headerTransparent: true }} />
        <Stack.Screen name="Sky_Content" component={Sky_Content} options={{ headerTransparent: true }} />
        <Stack.Screen name="Sky_Quiz1" component={Sky_Quiz1} options={{ headerTransparent: true }} />
        <Stack.Screen name="Sky_Result1" component={Sky_Result1} options={{ headerTransparent: true }} />
        <Stack.Screen name="Sky_Quiz2" component={Sky_Quiz2} options={{ headerTransparent: true }} />
        <Stack.Screen name="Sky_Result2" component={Sky_Result2} options={{ headerTransparent: true }} />
        <Stack.Screen name="Sky_Final" component={Sky_Final} options={{ headerTransparent: true }} />

        <Stack.Screen name="Forest_Content" component={Forest_Content} options={{ headerTransparent: true }} />
        <Stack.Screen name="Forest_Quiz" component={Forest_Quiz} options={{ headerTransparent: true }} />
        <Stack.Screen name="Forest_Result" component={Forest_Result} options={{ headerTransparent: true }} />
        <Stack.Screen name="Forest_Final" component={Forest_Final} options={{ headerTransparent: true }} />

        <Stack.Screen name="Water_Content" component={Water_Content} options={{ headerTransparent: true }} />
        <Stack.Screen name="Water_Quiz1" component={Water_Quiz1} options={{ headerTransparent: true }} />
        <Stack.Screen name="Water_Result1" component={Water_Result1} options={{ headerTransparent: true }} />
        <Stack.Screen name="Water_Quiz2" component={Water_Quiz2} options={{ headerTransparent: true }} />
        <Stack.Screen name="Water_Result2" component={Water_Result2} options={{ headerTransparent: true }} />
        <Stack.Screen name="Water_Final" component={Water_Final} options={{ headerTransparent: true }} />

        <Stack.Screen name="Final" component={Final} options={{ headerTransparent: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
