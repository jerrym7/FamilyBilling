// ThemeContext.js
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {customTheme, darkTheme, lightTheme} from '../themes/themes';
export const ThemeContext = createContext();

/**
 *
 * @param {Object} param
 * @return
 */
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const getUserTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('userTheme');
      if (storedTheme) {
        switch (storedTheme) {
          case 'dark':
            setTheme(darkTheme);
            break;
          case 'custom':
            setTheme(customTheme);
            break;
          default:
            setTheme(lightTheme);
            break;
        }
      } else {
        setTheme(lightTheme);
      }
    };
    getUserTheme();
  }, []);

  const changeTheme = async newTheme => {
    switch (newTheme) {
      case 'dark':
        setTheme(darkTheme);
        await AsyncStorage.setItem('userTheme', 'dark');
        break;
      case 'custom':
        setTheme(customTheme);
        await AsyncStorage.setItem('userTheme', 'custom');
        break;
      default:
        setTheme(lightTheme);
        await AsyncStorage.setItem('userTheme', 'light');
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
