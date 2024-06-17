import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Agenda} from 'react-native-calendars';
import CalendarEventCard from '../components/CalendarEventCard';
import {Text} from 'react-native-paper';
import moment from 'moment';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

const timeToString = time => {
  const date = new Date(time);
  return date?.toISOString()?.split('T')[0];
};

export default function HistoryScreen() {
  const agendaReference = useRef();
  const [allItems, setAllItems] = useState({});
  const [selectedDateString, setSelectedDateString] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setAllItems({
      '2024-06-16': [
        {name: 'Transaction One', amount: 30.25, label: 'Food', id: 0},
        {name: 'Transaction Two', amount: 54.23, label: 'Bills', id: 1},
      ],
      '2024-06-18': [
        {name: 'Transaction One', amount: 54.23, label: 'Bills', id: 0},
        {name: 'Transaction Two', amount: 54.23, label: 'Food', id: 1},
        {name: 'Transaction Three', amount: 54.23, label: 'Bills', id: 2},
        {name: 'Transaction Four', amount: 54.23, label: 'Food', id: 3},
        {name: 'Transaction Five', amount: 54.23, label: 'Bills', id: 4},
        {name: 'Transaction Six', amount: 54.23, label: 'Food', id: 5},
        {name: 'Transaction Seven', amount: 54.23, label: 'Food', id: 6},
        {name: 'Transaction Eight', amount: 54.23, label: 'Food', id: 7},
        {name: 'Transaction Nine', amount: 54.23, label: 'Food', id: 8},
      ],
    });
    const today = moment().format('YYYY-MM-DD');
    setSelectedDateString(today);
  }, []);
  const loadItems = day => {
    setTimeout(() => {
      const newItems = {};
      Object.keys(allItems).forEach(key => {
        newItems[key] = allItems[key];
      }, 1000);
      setAllItems(newItems);
    });
    setSelectedDateString(day.dateString);
  };

  const renderItem = useCallback(item => {
    return <CalendarEventCard item={item} />;
  }, []);
  useEffect(() => {
    const selectItems = allItems[selectedDateString];
    let totalAmount = 0;
    if (selectItems) {
      selectItems.forEach(element => {
        totalAmount += element.amount;
      });
    }
    setTotal(totalAmount);
  }, [selectedDateString]);

  const onSwipe = useCallback(event => {
    const {translationX, state} = event.nativeEvent;
    const screenWidth = Dimensions.get('window').width;

    if (state === State.END) {
      if (translationX > screenWidth / 3) {
        // Swipe right: go to the previous day
        setSelectedDateString(
          moment(selectedDateString).subtract(1, 'days').format('YYYY-MM-DD'),
        );
      } else if (translationX < -screenWidth / 3) {
        // Swipe left: go to the next day
        setSelectedDateString(
          moment(selectedDateString).add(1, 'days').format('YYYY-MM-DD'),
        );
      }
    }
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onHandlerStateChange={onSwipe}>
        <View style={{flex: 1}}>
          <Agenda
            ref={agendaReference}
            theme={{
              agendaKnobColor: '#757de8',
              calendarBackground: '#fff',
              selectedDayBackgroundColor: '#311b92',
              selectedDayTextColor: '#fff',
              todayTextColor: '#7e57c2',
              dotColor: '#311b92',
              selectedDotColor: '#fff',
              agendaTodayColor: '#311b92',
              monthTextColor: '#311b92',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '500',
              textSectionTitleColor: '#311b92',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14,
            }}
            selected={selectedDateString}
            items={allItems}
            renderItem={renderItem}
            renderDay={() => null}
            loadItemsForMonth={loadItems}
            pagingEnabled
            scrollEnabled
            showOnlySelectedDayItems
            renderEmptyData={() => <CalendarEventCard />}
          />
          <View
            style={[
              styles.rowStyle,
              styles.totalContainerStyle,
              styles.totalContainerTextStyle,
            ]}>
            <View style={{flex: 1}}>
              <Text style={styles.totalContainerTextStyle}>Your total: </Text>
            </View>
            <View>
              <Text style={styles.totalContainerTextStyle}>
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  totalContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  totalContainerTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#311b92',
  },
});
