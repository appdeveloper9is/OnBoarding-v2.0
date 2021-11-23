import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Todos from "./Todos";
import Discover from "./Discover";
import Feather from "react-native-vector-icons/Feather";
import {SafeAreaView, View} from "react-native";

const Tab = createBottomTabNavigator();


const BottomNavigation =()=>{
    return(


        <View style={{height:"100%", backgroundColor:"rgba(255, 198, 113, 1)"}}>
            <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;


                if (route.name === 'Home') {
                    iconName = "home"

                } else if (route.name === 'Todos') {
                    iconName = "list" ;
                }
                else if (route.name === 'Discover') {
                    iconName = "book-open" ;
                }

                return <Feather name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: 'rgba(255, 198, 113, 1)',
            tabBarInactiveTintColor: 'white',
            tabBarStyle:{ height:"12.5%",paddingTop:28,paddingBottom:28,borderTopColor:'rgba(99, 94, 205, 1)',backgroundColor:"rgba(99, 94, 205, 1)"}, headerTintColor:"green",})}>
                <Tab.Screen options={{headerShown:false }}  name="Home" component={Home} />
                <Tab.Screen options={{headerShown:false}} name="Todos" component={Todos} />
                <Tab.Screen options={{headerShown:false}} name="Discover" component={Discover} />
        </Tab.Navigator>
        </View>
       )
    }
export default BottomNavigation
