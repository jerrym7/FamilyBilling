import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Menu, useTheme} from 'react-native-paper';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {Text} from '../components/Default/Text';

export default function AccountScreen() {
  const {colors} = useTheme();
  /**@type {Object} */
  const context = useContext(ThemeContext);
  /** @type {ThemeProp} */
  const theme = context.theme;
  /** @type {Function} */
  const changeTheme = context.changeTheme;
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Card style={[styles.themeContainerStyle]}>
        <Card.Content>
          <View style={{flex: 1}}>
            <Text>Select Theme</Text>
          </View>
          <Menu
            visible={visible}
            titleStyle={{color: colors.text}}
            onDismiss={closeMenu}
            anchor={
              <Button
                mode="contained"
                onPress={openMenu}
                textColor={colors.text}>
                Choose Theme
              </Button>
            }>
            <Menu.Item
              titleStyle={{color: colors.text}}
              onPress={() => {
                changeTheme('light');
                closeMenu();
              }}
              title="Light Theme"
            />
            <Menu.Item
              titleStyle={{color: colors.text}}
              onPress={() => {
                changeTheme('dark');
                closeMenu();
              }}
              title="Dark Theme"
            />
            <Menu.Item
              titleStyle={{color: colors.text}}
              onPress={() => {
                changeTheme('custom');
                closeMenu();
              }}
              title="Custom Theme"
            />
          </Menu>
        </Card.Content>
      </Card>
    </View>
  );
}

const makeStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    themeContainerStyle: {
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.background,
      borderWidth: 1,
      borderRadius: 10,
      shadowColor: colors.shadow,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  });
