import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const App = () => {
const RootNav = createNativeStackNavigator();
const [fontsLoaded]=useFonts({
  'Poppins': require('./assets/fonts/Poppins/Poppins-Regular.ttf')
})

useEffect(() => {
  async function prepare() {
    await SplashScreen.preventAutoHideAsync();
  }
  prepare();
}, [] )

if(!fontsLoaded) {
  return undefined;
} else {
  SplashScreen.hideAsync();
}

return(
  <NavigationContainer>
    <RootNav.Navigator initialRouteName='Welcome'>
      <RootNav.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{headerShown:false}}
      />
      <RootNav.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown:false}}
      />
    </RootNav.Navigator>
  </NavigationContainer>
);

}

const styles=StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default App;