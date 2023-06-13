import Icon from "react-native-vector-icons/FontAwesome5"
import React, { Component } from 'react'
import { Image, View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Favorite from '../screens/FavoriteScreen'
import Pokedex from '../screens/Pokedex'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator();


export class Navigation extends Component {
  
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Favorite'
          component={Favorite}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Pokedex'
          component={Pokedex}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => renderPokeIcon(),
            tabBarItemStyle: {backgroundColor: "red", marginVertical:-45, borderTopLeftRadius:100, borderTopRightRadius:100, marginHorizontal:20 },
            headerTransparent:true,
            headerShown: false 
          }}
        />
        <Tab.Screen
          name='Account'
          component={Account}
          options={{
            tabBarLabel: "Mi cuenta",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),tabBarItemStyle:{}
         
          }}
        />
      </Tab.Navigator>
    )
  }
}

export default Navigation


const renderPokeIcon = () => {
  return (
    <View style={{ width: 80, height: 80, top: -13 }}>
      <Image
        source={require('../assets/pokeball.png')}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}
