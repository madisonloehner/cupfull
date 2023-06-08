import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import StartQuizScreen from './screens/StartQuizScreen';
import CreateAccountScreen from './screens/CreateAccountScreen'
import { StyleSheet } from 'react-native';
import { AuthStack } from './navigation/AuthStack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

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
      <AuthStack/>
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