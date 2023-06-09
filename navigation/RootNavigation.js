import { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AuthenticatedUserContext } from '../AuthenticatedUserProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator } from 'react-native';
import { authentication } from '../firbase-Config';
import MainStack from './MainStack';

export default function RootNavigator() {
    const {user, setUser} = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // onAuthStateChanged returns an unsubscriber
      const unsubscribeAuthStateChanged = onAuthStateChanged (
        authentication,
        (authenticatedUser) => {
          authenticatedUser ? setUser(authenticatedUser) : setUser(null);
          setIsLoading(false);
        }
      );
  
      // unsubscribe auth listener on unmount
      return unsubscribeAuthStateChanged;
    }, [user]);
  
    if (isLoading) {
      return <ActivityIndicator/>
    };
    
    return (
        <NavigationContainer>
            { user ?  <MainStack/> : <AuthStack/> }
        </NavigationContainer>
    )};