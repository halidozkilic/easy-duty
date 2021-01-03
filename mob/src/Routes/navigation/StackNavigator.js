import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Home from '../../pages/Home/Home'
import GetJobs from '../../pages/Task/GetJobs'
import JobDetail from '../../pages/Task/JobDetail'
import CreateJob from '../../pages/Task/CreateJob'


const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GetJobs" component={GetJobs} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
      <Stack.Screen name="CreateJob" component={CreateJob} />
    </Stack.Navigator>
  );
}

const HomeNavigator = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    );
  }


export { StackNavigator,HomeNavigator };