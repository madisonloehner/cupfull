import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';




export default function App() {  
const RootNav = createNativeStackNavigator();

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
