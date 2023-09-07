import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../Views/Dashboard/Dashboard';
import { Login } from '../Views/Login/Login';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-native';
import { ProductDetails } from '../Views/Dashboard/ProductDetails/ProductDetails';

const Stack = createNativeStackNavigator();

const DashboardStackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  );
};

const PrivateRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name='DashboardStackRoutes'
      component={DashboardStackRoutes}
    />
  </Stack.Navigator>
);

const Routes = () => {
  // const signed = useAuthStore((state) => state.signed);

  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authState.authenticated ? (
          <Stack.Screen
            options={{
              headerRight: () => <Button onPress={onLogout} title='Logout' />,
            }}
            name='PrivateRoutes'
            component={PrivateRoutes}
          />
        ) : (
          <Stack.Screen name='Login' component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
