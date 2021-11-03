import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Account from '../scenes/account';
import Products from '../scenes/products';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 7,
          },
        }}>
        <Tab.Screen
          name="List"
          component={Products}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="th-large" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Acount"
          component={Account}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="user-alt" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
