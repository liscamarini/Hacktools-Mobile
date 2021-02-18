import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes/app.routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#650075" />
    <AppRoutes />
  </NavigationContainer>
);

export default App;
