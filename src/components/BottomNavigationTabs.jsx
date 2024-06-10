import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from '../screens/MainScreen';
import AccountScreen from '../screens/AccountScreen';
import AddBillScreen from '../screens/AddBillScreen';
import CalendarScreen from '../screens/CalendarScreen';
import BillingListScreen from '../screens/HistoryScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigationTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#4615b2" barStyle={{}}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddBillScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={BillingListScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
