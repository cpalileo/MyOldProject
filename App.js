import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppNavigator from './src/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme';
import { enableScreens } from 'react-native-screens';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
};

export default App;