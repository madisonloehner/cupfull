import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import RootNavigator from './navigation/RootNavigation';

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
  <AuthenticatedUserProvider>
    <RootNavigator/>
  </AuthenticatedUserProvider>
);

}

export default App;