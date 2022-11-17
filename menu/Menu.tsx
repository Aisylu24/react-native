import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import Cart from "../Screens/Cart";


export default function Menu() {

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "ios-home" : "ios-home-outline"
                        size = focused ? size + 8 : size + 5
                    } else if (route.name === "Search") {
                        iconName = focused ? "search-sharp" : "search-outline"
                        size = focused ? size + 8 : size + 5
                    } else if (route.name === "Cart") {
                        iconName = focused ? "ios-cart-sharp" : "ios-cart-outline"
                        size = focused ? size + 8 : size + 5
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person-circle-sharp" : "person-circle-outline"
                        size = focused ? size + 8 : size + 5
                    }
                    return <Ionicons  name={iconName} size={size} color={color}/>
                },
                    tabBarActiveTintColor: 'purple',
                    // tabBarInactiveTintColor: 'pink',
                    tabBarShowLabel: true,
                    tabBarStyle: {
                                // backgroundColor: 'pink',
                                height: 50
                            },
                    // headerShown: false
            })}
            >
                <Tab.Screen name={'Home'} component={Home} options={{headerTitle: 'Welcome Aisylu!', headerTitleStyle:{fontSize: 20}}}/>
                <Tab.Screen name={'Search'} component={Search}/>
                <Tab.Screen name={'Cart'} component={Cart}/>
                <Tab.Screen name={'Profile'} component={Profile} options={{ tabBarBadge: 10}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

