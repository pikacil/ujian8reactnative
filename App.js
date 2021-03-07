import React ,{ useState,useEffect }from 'react'
import * as eva from '@eva-design/eva';
import Home from './Home';
import Register from './Screen/Register/Register';
import Appnavigator from './AppNavigator';

import { ApplicationProvider, IconRegistry,BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='LIST'/>
    <BottomNavigationTab title='REGISTER'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home}/>
    <Screen name='Register' component={Register}/>
  </Navigator>
);
const App = () => {

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Appnavigator" component={Appnavigator}  options={{ title: '' }} />
        <Stack.Screen name="Home" component={Home}  options={{ title: '' }} />
       
      </Stack.Navigator>
      </NavigationContainer> */}
       <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
    </ApplicationProvider>
    </>
  )
}

export default App;
