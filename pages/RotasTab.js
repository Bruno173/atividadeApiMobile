import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import home from "./home.js";
import times from "./times.js"
import horarios from "./horarios.js"

const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        
        <Tab.Navigator initialRouteName="home">
           
           <Tab.Screen
            name="times"
            component={times}
            options={{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="magnify" color={color} size={size}/>}}
            />
           
            <Tab.Screen
            name="home"
            component={home}
            options={{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>}}
            />
        
            <Tab.Screen
            name="horarios"
            component={horarios}
            options={{
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="fruit-watermelon" color={color} size={size}/>}}
            />
        </Tab.Navigator>
    )
}