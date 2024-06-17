import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-paper';
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
  if (item) {
    const [isPressed, setPressed] = useState(false);
    return (
      <TouchableOpacity
        style={[
          isPressed && styles.pressedStyle,
          styles.containerStyle,
          styles.spacingStyle,
        ]}
        key={item.id}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}>
        <Card style={[styles.containerStyle, styles.cardContainerStyle]}>
          <Card.Content>
            <View style={[{flexDirection: 'row'}, styles.boxShadowStyle]}>
              <View style={{flex: 1}}>
                <Text style={{color: '#311b92'}}>{item?.name}</Text>
                <Text style={styles.labelStyle}>{item?.label}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', color: '#311b92'}}>
                  ${item.amount}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.containerStyle, styles.spacingStyle]}>
        <Card style={[styles.containerStyle]}>
          <Card.Content>
            <View>
              <Text style={{color: '#311b92'}}>No transactions</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }
};

export default CalendarEventCard;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
  },
  cardContainerStyle: {},
  labelStyle: {
    color: '#7e57c2',
    fontSize: 10,
    paddingLeft: 2,
    paddingTop: 2,
  },
  spacingStyle: {
    marginTop: 5,
  },
  boxShadowStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  pressedStyle: {
    backgroundColor: '#3f51b5',
    borderWidth: 2,
    borderRadius: 5,
  },
});
