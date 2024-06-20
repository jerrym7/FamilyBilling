/// themes.js
import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#673AB7', // main primary color
    primaryLight: '#D1C4E9', // light primary color
    primaryDark: '#512DA8', // dark primary color
    secondary: '#5C6BC0', // main secondary color
    secondaryLight: '#C5CAE9', // light secondary color
    secondaryDark: '#3F51B5', // dark secondary color
    background: '#ffffff',
    text: '#212121',
    iconText: '#FFFFFF',
    secondaryText: '#757575',
    divider: '#BDBDBD',
    surface: '#ffffff',
    accent: '#7C4DFF',
    error: '#C62828',
    disabled: 'rgba(66, 66, 66, 0.38)',
    placeholder: 'rgba(66, 66, 66, 0.54)',
    backdrop: 'rgba(66, 66, 66, 0.5)',
    shadow: '#212121',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#673AB7', // main primary color
    primaryLight: '#D1C4E9', // light primary color
    primaryDark: '#512DA8', // dark primary color
    secondary: '#5C6BC0', // main secondary color
    secondaryLight: '#C5CAE9', // light secondary color
    secondaryDark: '#3F51B5', // dark secondary color
    background: '#212121', // lighter than #121212 for better readability
    text: '#ffffff',
    secondaryText: '#E0E0E0',
    surface: '#424242',
    accent: '#7C4DFF',
    error: '#C62828',
    disabled: 'rgba(207, 216, 220, 0.38)',
    placeholder: 'rgba(207, 216, 220, 0.54)',
    backdrop: 'rgba(207, 216, 220, 0.5)',
    shadow: '#E0E0E0',
  },
};

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff4081', // main primary color
    primaryLight: '#ff79b0', // light primary color
    primaryDark: '#c60055', // dark primary color
    secondary: '#c51162', // main secondary color
    secondaryLight: '#fd558f', // light secondary color
    secondaryDark: '#8e0038', // dark secondary color
    background: '#f5f5f5',
    text: '#000000',
    surface: '#ffffff',
    accent: '#c51162',
    error: '#B00020',
    disabled: 'rgba(0, 0, 0, 0.38)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    shadow: '#212121',
  },
};
