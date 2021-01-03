import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Easy Duty" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;