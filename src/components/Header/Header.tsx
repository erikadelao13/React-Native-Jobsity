import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { SearchIcon, LeftArrowIcon } from '@assets/svg';
import { colors, moderateScale } from '@utils';
import { styles } from './Header.styles';
import { THeaderProps } from './Header.types';

export const Header: React.FC<THeaderProps> = ({
  withArrowLeft,
  withSearchBar,
  onPressBack = () => undefined,
  onChange = () => undefined,
  searchValue,
}) => {
  return (
    <View style={styles.container}>
      {withArrowLeft ? (
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={onPressBack}>
            <LeftArrowIcon
              width={moderateScale(25)}
              height={moderateScale(25)}
              color={colors.purple3}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      {withSearchBar ? (
        <View style={styles.inputcontainer}>
          <SearchIcon
            width={moderateScale(22)}
            height={moderateScale(20)}
            color={colors.white1}
          />
          <TextInput style={styles.inputStyle} onChangeText={onChange} value={searchValue} />
        </View>
      ) : null}
    </View>
  );
};
