import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Card, useTheme} from 'react-native-paper';
import {Text} from './Default/Text';
/**
 *
 * @param {Object} param
 * @param {Object} param.item
 * @param {String} param.item.name
 * @param {String} param.item.label
 * @param {Number} param.item.amount
 * @param {Number} param.item.id
 * @returns
 */
const CalendarEventCard = ({item}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  const [isPressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      style={[
        isPressed && styles.pressedStyle,
        styles.containerStyle,
        styles.spacingStyle,
        {flex: 1},
      ]}
      key={item.id}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <Card style={[styles.containerStyle, styles.cardContainerStyle]}>
        <Card.Content>
          <View style={[{flexDirection: 'row'}, styles.boxShadowStyle]}>
            <View style={{flex: 1}}>
              <Text style={{color: colors.text}}>{item?.name}</Text>
              <Text style={[styles.labelStyle]}>{item?.label}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color: colors.text}}>
                ${item.amount}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default CalendarEventCard;

const makeStyles = colors =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: colors.background,
    },
    cardContainerStyle: {
      backgroundColor: colors.surface,
    },
    labelStyle: {
      color: colors.secondaryText,
      fontSize: 10,
      paddingLeft: 2,
      paddingTop: 2,
    },
    spacingStyle: {
      marginTop: 5,
    },
    boxShadowStyle: {
      shadowColor: colors.shadow,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    pressedStyle: {
      backgroundColor: colors.background,
      borderWidth: 2,
      borderRadius: 5,
    },
  });
