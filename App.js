import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/stackNavigator';
import SettingProvider from './src/utils/SettingProvider';
import {Provider} from 'react-redux';
import store from './src/utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <SettingProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SettingProvider>
    </Provider>
  );
};
export default App;
