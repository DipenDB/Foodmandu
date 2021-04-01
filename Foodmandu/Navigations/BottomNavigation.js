
import React from 'react';

import {NavigationContainer}  from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import InboxScreen from '../Screens/ButtonTabs/InboxScreen';
import BasketScreen from '../Screens/ButtonTabs/BasketScreen';
import AccountScreen from '../Screens/ButtonTabs/AccountSccreen';
import MoreScreen from '../Screens/ButtonTabs/MoreScreen';
import Color from '../Assets/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Colors from '../../MyApp/Assets/Colors';
import {
    BasketNavigation,
    HomeNavigation,
    InboxNavigation,
    MoreNavigation,
    ProfileNavigation,
} from './StackNavigation';


const BottomTab =createBottomTabNavigator();

const BottomNavigation =()=>{
    return(
            <BottomTab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: Color.red,

                }}>

                <BottomTab.Screen name="Home" component={HomeNavigation}
                                  options={{
                                      tabBarLabel:"",
                                      tabBarIcon:({focused,color,size})=>{

                                          if(focused){
                                              return <Icon name="home-outline" size={29} color='red' />
                                          }
                                          return <Icon name="home-outline" size={25} color={Color.black} />

                                      }

                                  }}

                />
                <BottomTab.Screen name="INBOX" component={InboxNavigation}
                                  options={{
                                      tabBarLabel:"",
                                      tabBarIcon:({focused,color,size})=>{

                                          if(focused){
                                              return <Icon name="inbox" size={29} color='red' />
                                          }
                                          return <Icon name="inbox" size={25} color={Color.black} />

                                      }

                                  }}
                />
                <BottomTab.Screen name="MY BASKET" component={BasketNavigation}
                                  options={{
                                      tabBarLabel:"",
                                      tabBarIcon:({focused,color,size})=>{

                                          if(focused){
                                              return <Icon2 name="shopping-basket" size={29} color='red' />
                                          }
                                          return <Icon2 name="shopping-basket" size={25} color={Color.black} />

                                      }

                                  }}/>
                <BottomTab.Screen name="MY PROFILE" component={ProfileNavigation}
                                  options={{
                                      tabBarLabel:"",
                                      tabBarIcon:({focused,color,size})=>{

                                          if(focused){
                                              return <Icon name="account-details-outline" size={29} color='red' />
                                          }
                                          return <Icon name="account-details-outline" size={25} color={Color.black} />

                                      }

                                  }}/>
                <BottomTab.Screen name="MORE" component={MoreNavigation}
                                  options={{
                                      tabBarLabel:"",
                                      tabBarIcon:({focused,color,size})=>{

                                          if(focused){
                                              return <Icon name="dots-horizontal-circle" size={29} color='red' />
                                          }
                                          return <Icon name="dots-horizontal-circle" size={25} color={Color.black} />

                                      }

                                  }}/>
            </BottomTab.Navigator>

    )
}

export default BottomNavigation;
