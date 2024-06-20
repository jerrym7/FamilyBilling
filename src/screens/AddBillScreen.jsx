import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect, useRoute, useTheme} from '@react-navigation/native';
import {Text} from '../components/Default/Text';

/**
 *
 * @param {Object} param
 * @returns
 */
export default function AddBillScreen({navigation}) {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <View style={styles.containerStyle}>
      <Text>Add Bill</Text>
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
