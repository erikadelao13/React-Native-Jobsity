import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: 'TT Norms Pro Medium',
    fontSize: moderateScale(36),
  },
  h2: {
    fontFamily: 'TT Norms Pro Medium',
    fontSize: moderateScale(24),
  },
  h3: {
    fontFamily: 'TT Norms Pro Medium',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
  },
  p: {
    fontFamily: 'TT Norms Pro Medium',
    lineHeight: moderateScale(20),
    fontSize: moderateScale(14),
  },
  h1Bold: {
    fontFamily: 'TT Norms Pro Black',
    fontSize: moderateScale(36),
  },
  h2Bold: {
    fontFamily: 'TT Norms Pro Black',
    fontSize: moderateScale(24),
  },
  h3Bold: {
    fontFamily: 'TT Norms Pro Black',
    fontSize: moderateScale(16),
  },
  pBold: {
    fontFamily: 'TT Norms Pro Black',
    lineHeight: moderateScale(20),
    fontSize: moderateScale(14),
  },
});
