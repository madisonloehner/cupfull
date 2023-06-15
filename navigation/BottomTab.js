import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';

const TabNav = createMaterialBottomTabNavigator();

export default function BottomTab() {  
  return (
    <TabNav.Navigator
    initialRouteName='Home'
    //   activeColor = "#05B479"
    //   inactiveColor='#505050'
      barStyle = {{backgroundColor: 'white'}}>
        <TabNav.Screen 
          name = 'HomeTab' 
          component = {HomeScreen} 
          options = {{
            tabBarLabel: 'home',
            tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name = 'home' 
              size = {25}
              //color = {focused? '#05B479' : '#505050' }
              />
              ), 
            
          }}
        />
    </TabNav.Navigator>   
  );
}