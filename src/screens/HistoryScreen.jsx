import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CalendarList} from 'react-native-calendars';

export default function HistoryScreen() {
  return (
    <SafeAreaView>
      <CalendarList
        // Enable horizontal scrolling, default = false
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.
        calendarWidth={styles.screenStyle.width}
        calendarHeight={styles.screenStyle.width}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
