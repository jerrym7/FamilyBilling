/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './src/screens/MainScreen';
import BottomNavigationTabs from './src/components/BottomNavigationTabs';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <BottomNavigationTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
