import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import useFonts from './hooks/useFonts';


const App = () => {
const RootNav = createNativeStackNavigator();

const [IsReady, SetIsReady] = useState(false);

const LoadFonts = async () => {
  await useFonts();
};

if (!IsReady) {
  return (
    <AppLoading
      startAsync={LoadFonts}
      onFinish={() => SetIsReady(true)}
      onError={() => {}}
    />
  );
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

export default App;