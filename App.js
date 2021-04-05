/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomePage from './MyApp/Screens/HomePage';
import HomeScreen from './Foodmandu/Screens/HomeScreen';
import BottomNavigation from './Foodmandu/Navigations/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Foodmandu/Navigations/StackNavigation';
import Navigations from './Foodmandu/Navigations/Navigations';


const App =() => {

  return (
      <PaperProvider>

          <Navigations>
              <SafeAreaView style={styles.container}>
                  <HomeScreen/>
              </SafeAreaView>
          </Navigations>


      </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;
