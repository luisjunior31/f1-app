import {  Stack, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from "../../../Constants/Colors";

const Tab = createMaterialTopTabNavigator();

const TopTabs = withLayoutContext(Tab.Navigator)

export default function RaceLayout() {
    return (
        <>
        <Stack.Screen options={{ title: 'Racing Detail' }} />
         <TopTabs
         screenOptions={{ 
            tabBarLabelStyle: {
              fontFamily: 'F1-Bold'
            },
            tabBarStyle: {
            backgroundColor: Colors.primary
         },
         tabBarInactiveTintColor: 'gainsboro',
         tabBarActiveTintColor: 'whitesmoke',
         tabBarIndicatorStyle: {
            backgroundColor: 'whitesmoke',
            height: 5
         }
        }}
         />
        </>
    )
}