import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Profile from '../pages/Profile';
import Info from '../pages/Info';
import GetJobs from '../pages/Task/GetJobs'
import JobDetail from '../pages/Task/JobDetail'
import CreateJob from '../pages/Task/CreateJob'
const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

export default function AppRoutes(){
    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="GetJobs" component={GetJobs} />
            <AppStack.Screen name="CreateJob" component={CreateJob} />
            <AppStack.Screen name="JobDetail" component={JobDetail} />
        </AppStack.Navigator>
    );
}