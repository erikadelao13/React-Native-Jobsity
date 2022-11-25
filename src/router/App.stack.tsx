import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, EpisodeDetail, SerieDetail } from '@screens';
import { APP_STACK } from '@constants';
import { moderateScale } from '@utils';

export type TAppStackParamsList = {
  [APP_STACK.HOME]: undefined;
  [APP_STACK.SERIE_DETAIL]: {
    id: number;
  };
  [APP_STACK.EPISODE_DETAIL]: {
    id: number;
  };
};

const AppStack = createStackNavigator<TAppStackParamsList>();

export const AppStackRouter = () => (
  <AppStack.Navigator
    screenOptions={{
      headerStyle: {
        height: moderateScale(120),
      },
    }}
    initialRouteName={APP_STACK.HOME}
  >
    <AppStack.Screen options={{ headerShown: false }} component={Home} name={APP_STACK.HOME} />
    <AppStack.Screen
      options={{
        headerShown: false,
      }}
      component={SerieDetail}
      name={APP_STACK.SERIE_DETAIL}
    />
    <AppStack.Screen
      options={{
        headerShown: false,
      }}
      component={EpisodeDetail}
      name={APP_STACK.EPISODE_DETAIL}
    />
  </AppStack.Navigator>
);
