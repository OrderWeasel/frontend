import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native';
import {MenuTab} from './tabs/MenuTab';
import {CartTab} from './tabs/CartTab';

import {CartProvider} from '../../../context/CartContext';

import {containerStyles} from '../../../res/styles/container';

const Tab = createBottomTabNavigator();

// // fetching menu data for a restaurant example
// function getMenuData(id) {
//   return menuData[id];
// }

export function RestaurantScreen({route}) {
  // need to pass route and navigation to MenuTab
  // can we pass this as a prop to Tab.Screen component?
  // Do we use Context or State hooks?

  // customer header for cart tab to remove native backHandler functionality
  // use X button to return to menuTab - use "Close Cart" button for reference

  // implement Context to prop drill cart data

  let params = route.params;

  return (
    <CartProvider>
      <SafeAreaView style={containerStyles.main}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              display: 'none',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabelStyle: {
              fontSize: 16,
              marginBottom: 10,
            },
          }}>
          <Tab.Screen
            name="Menu"
            component={MenuTab}
            initialParams={{params: params}}
          />
          <Tab.Screen
            name="Cart"
            component={CartTab}
            backBehavior="RestaurantScreen"
          />
        </Tab.Navigator>
      </SafeAreaView>
    </CartProvider>
  );
}
