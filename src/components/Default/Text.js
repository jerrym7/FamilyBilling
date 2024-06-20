import React from 'react';
import {Text as PaperText} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

/**
 * CustomText component
 * @param {Object} props - Component props
 * @param {React.ReactNode} [props.children] - Text to display
 * @param {Object} [props.style] - Custom styles for the text component
 */
export const Text = ({children, style, ...rest}) => {
  const {colors} = useTheme();

  const styles = makeStyles(colors);

  return (
    <PaperText style={[styles.textStyle, style]} {...rest}>
      {children}
    </PaperText>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
};

const makeStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    textStyle: {
      color: colors.text,
    },
    themeContainerStyle: {
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      shadowColor: colors.shadow,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  });
