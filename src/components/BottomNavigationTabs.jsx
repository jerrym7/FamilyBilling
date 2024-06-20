import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from '../screens/MainScreen';
import AccountScreen from '../screens/AccountScreen';
import AddBillScreen from '../screens/AddBillScreen';
import CalendarScreen from '../screens/CalendarScreen';
import BillingListScreen from '../screens/HistoryScreen';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {BottomNavigation, FAB, Portal, useTheme} from 'react-native-paper';
import {useCallback, useContext, useEffect, useState} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import HistoryScreen from '../screens/HistoryScreen';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigationTabs({navigation, route}) {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [index, setIndex] = useState(0);
  const [isFABVisible, setIsFABVisible] = useState(true);
  const [routes] = useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'cycles', title: 'Cycles', icon: 'calendar'},
    {key: 'blank', title: '', icon: ''}, // Blank middle button
    {key: 'history', title: 'History', icon: 'history'},
    {key: 'account', title: 'Account', icon: 'account'},
  ]);
  /** @type {ThemeProp}*/
  const theme = useContext(ThemeContext).theme;

  const renderScene = BottomNavigation.SceneMap({
    home: MainScreen,
    cycles: CalendarScreen,
    history: HistoryScreen,
    account: AccountScreen,
  });

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('state', e => {
        const routeName = e.data.state.routes[e.data.state.index].name;
        if (routeName === 'HistoryScreen') {
          setIsFABVisible(false);
        } else {
          setIsFABVisible(true);
        }
      });

      return unsubscribe;
    }, [navigation]),
  );

  const renderIcon = ({route, focused, color}) => {
    if (route.key === 'blank') {
      return null; // No icon for the blank middle button
    }

    return <MaterialCommunityIcons name={route.icon} size={24} color={color} />;
  };

  return (
    <View style={{flex: 1}}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={i => {
          // Prevent selection of the blank middle button
          if (routes[i].key !== 'blank') {
            setIndex(i);
          }
        }}
        renderScene={renderScene}
        renderIcon={renderIcon}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.disabled}
        barStyle={styles.bottomNavigation}
      />

      {isFABVisible ? (
        <Portal>
          <FAB
            style={styles.fabStyle}
            icon="plus"
            size="large"
            color={colors.background}
            onPress={() => {
              setIsFABVisible(false);
              navigation.navigate('AddBillScreen');
            }}
          />
        </Portal>
      ) : null}
    </View>
  );
}
const makeStyles = colors => {
  return StyleSheet.create({
    fabStyle: {
      position: 'absolute',
      margin: 10,
      right:
        Platform.OS === 'android'
          ? Dimensions.get('window').width / 2.5
          : '50%',
      left:
        Platform.OS === 'android'
          ? Dimensions.get('window').width / 2.5
          : '50%',
      bottom: 25,
      width: 65,
      height: 65,
      justifyContent: 'center',
      alignItems: 'center',
      transform: Platform.OS === 'android' ? [] : [{translateX: -28}],
      backgroundColor: colors.accent, // Customize the color of the FAB here},
      borderRadius: 35,
    },
  });
};
