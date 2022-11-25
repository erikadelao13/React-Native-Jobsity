import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '@utils';
import { styles } from './Loader.styles';

export const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.purple1} />
    </View>
  );
};
