import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Agenda} from 'react-native-calendars';
import CalendarEventCard from '../components/CalendarEventCard';
import {Text} from '../components/Default/Text';
import moment from 'moment';
import {useTheme, IconButton} from 'react-native-paper';

const timeToString = time => {
  const date = new Date(time);
  return date?.toISOString()?.split('T')[0];
};

export default function HistoryScreen() {
  const {colors} = useTheme();
  const styles = makeStyle(colors);
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
      });
      setAllItems(newItems);
    }, 1000);
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
  }, [selectedDateString, allItems]);

  const goToPreviousDay = () => {
    setSelectedDateString(
      moment(selectedDateString).subtract(1, 'days').format('YYYY-MM-DD'),
    );
  };

  const goToNextDay = () => {
    setSelectedDateString(
      moment(selectedDateString).add(1, 'days').format('YYYY-MM-DD'),
    );
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={goToPreviousDay}>
          <IconButton icon="chevron-left" size={30} />
          <Text>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={goToNextDay}>
          <Text>Next</Text>
          <IconButton icon="chevron-right" size={30} />
        </TouchableOpacity>
      </View>
      <Agenda
        ref={agendaReference}
        theme={styles.agendaStyle}
        selected={selectedDateString}
        items={allItems}
        renderItem={renderItem}
        renderDay={() => null}
        loadItemsForMonth={loadItems}
        showOnlySelectedDayItems
        renderEmptyData={() => (
          <View style={styles.emptyDate}>
            <Text>No transactions</Text>
          </View>
        )}
        style={{backgroundColor: colors.background}}
        rowHasChanged={(r1, r2) => r1.name !== r2.name}
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
  );
}

const makeStyle = colors =>
  StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: colors.background,
    },
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
      color: colors.text,
      backgroundColor: colors.background,
    },
    agendaStyle: {
      backgroundColor: colors.background,
      calendarBackground: colors.background,
      textSectionTitleColor: colors.secondaryDark,
      selectedDayBackgroundColor: colors.primary,
      selectedDayTextColor: colors.text,
      todayTextColor: colors.primary,
      dayTextColor: colors.primaryDark,
      textDisabledColor: colors.disabled,
      dotColor: colors.primary,
      selectedDotColor: colors.text,
      arrowColor: colors.primary,
      monthTextColor: colors.primary,
      indicatorColor: colors.primary,
      textDayFontFamily: 'monospace',
      textMonthFontFamily: 'monospace',
      textDayHeaderFontFamily: 'monospace',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16,
      agendaKnobColor: colors.primary, // Agenda knob color
      agendaTodayColor: colors.secondaryLight, // Today's color in agenda
      reservationsBackgroundColor: colors.background,
    },
    emptyDate: {
      height: 80, // Ensure empty dates have a height for better scrolling
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
  });
