import React from 'react';
import {View, Image, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Appbar, useTheme, IconButton} from 'react-native-paper';
import PropTypes from 'prop-types';
import {Text} from './Text';

/**
 * Toolbar component
 * @param {Object} props - Component props
 * @param {string} [props.title] - Title to display in the toolbar
 * @param {Object} [props.logo] - URI of the logo image to display on the left side of the toolbar
 * @param {Array} [props.buttons] - Array of button configurations to display on the right side of the toolbar
 * @param {StyleProp<ViewStyle>} props.titleStyle : customize the style of title text
 */
const Toolbar = ({title, logo, buttons, titleStyle}) => {
  const {colors} = useTheme();
  return (
    <Appbar.Header style={{backgroundColor: colors.primary}}>
      {logo && <Image source={logo} style={styles.logo} />}
      <View style={styles.titleContainer}>
        <Text style={[titleStyle, styles.title]}>{title}</Text>
      </View>
      {buttons &&
        buttons.map((button, index) => (
          <IconButton
            key={index}
            icon={button.icon}
            iconColor={colors.text}
            onPress={button.onPress}
          />
        ))}
    </Appbar.Header>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired,
    }),
  ),
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Toolbar;
