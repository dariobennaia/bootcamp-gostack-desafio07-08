import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { navigationRef } from './services/navigation';

const Stack = createStackNavigator();

const routes = [
  { name: 'Home', component: Home },
  { name: 'Cart', component: Cart },
];

const globalOptions = {
  header: ({ navigation }) => <Header navigation={navigation} />,
};

const Routes = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#17161b" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {routes.map(({ name, component }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{ ...globalOptions, ...component.routeOptions }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
