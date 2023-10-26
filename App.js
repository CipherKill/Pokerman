import React, { useState } from 'react';
import {View,Text,Dimensions} from 'react-native'
import { styles } from './Styles/mainstyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChipCalculator from './Components/ChipCalculator';
import PokerHands from './Components/PokerHands';


const Tab = createMaterialTopTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator 
          initialRouteName='ChipCalculator' 
          initialLayout={{width: Dimensions.get('window').width}}
          screenOptions={{
            tabBarShowLabel:false,
            tabBarIndicatorContainerStyle:{
              height:2,
              backgroundColor:'grey'
            },
            tabBarIndicatorStyle:{
              backgroundColor:'cyan'
            },
            tabBarStyle:{
              height:2
            }
          }}
          >
          <Tab.Screen name="ChipCalculator" component={ChipCalculator} />
          <Tab.Screen name="PokerHands" component={PokerHands} />
        </Tab.Navigator>
      );
    }

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#070b12'
  },
};
    
const App=()=>{
      
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MainTheme}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Pokerman <Text style={{fontSize:20}}>By Alan</Text></Text>
            </View>
            {/* <ChipCalculator/> */}
            {/* <PokerHands/> */}
            <TabRoutes/>

          </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;


