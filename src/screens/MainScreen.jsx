import {StyleSheet, View} from 'react-native';
import {Text} from '../components/Default/Text';
import React from 'react';
import {useTheme} from 'react-native-paper';

export default function MainScreen() {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View>
      <Text>MainScreen</Text>
    </View>
  );
}

const makeStyles = colors =>
  StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
