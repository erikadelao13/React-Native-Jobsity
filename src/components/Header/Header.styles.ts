import { StyleSheet } from 'react-native';
import { colors, moderateScale } from '@utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(60),
    flexDirection: 'row',
    backgroundColor: colors.white1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.grey1,
    borderBottomWidth: 1,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(18),
  },
  inputcontainer: {
    width: '70%',
    flexDirection: 'row',
    backgroundColor: colors.grey2,
    height: '70%',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
  },
  inputStyle: {
    width: '100%',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(20),
    height: '100%',
    fontFamily: 'TT Norms Pro Medium',
    fontSize: moderateScale(14),
    color: colors.purple3,
  },
});
