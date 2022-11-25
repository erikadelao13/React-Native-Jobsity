import { StyleSheet } from 'react-native';
import { moderateScale, colors } from '@utils';

export const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: colors.white1,
  },
  container: {
    backgroundColor: colors.white1,
    width: '100%',
    height: '100%',
  },
  flatlistContentStyle: {
    marginTop: moderateScale(12),
    marginBottom: moderateScale(200),
  },
  flatListStyle: {
    marginBottom: moderateScale(120),
  },
  flatlistItemStyleLeft: {
    paddingRight: moderateScale(8),
    paddingLeft: moderateScale(10),
    width: '50%',
  },
  flatlistItemStyleRight: {
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(10),
    width: '50%',
  },
  columnStyle: {
    marginBottom: moderateScale(20),
    width: '100%',
    justifyContent: 'space-between',
    // borderColor: 'red',
  },
});
