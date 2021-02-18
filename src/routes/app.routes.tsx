import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Registered from '../pages/Registered';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#b286b7' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Registered" component={Registered} />
  </App.Navigator>
);

export default AppRoutes;
