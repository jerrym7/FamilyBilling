/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {PaperProvider, FAB, Portal} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './src/screens/MainScreen';
import BottomNavigationTabs from './src/components/BottomNavigationTabs';
import {NavigationContainer} from '@react-navigation/native';
import {CalendarProvider} from 'react-native-calendars';
import AddBillScreen from './src/screens/AddBillScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <CalendarProvider date="yyyy-MM-dd">
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={BottomNavigationTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddBillScreen"
              component={AddBillScreen}
              options={{
                headerShown: false,
                animationEnabled: false, // Disable animation
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CalendarProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
