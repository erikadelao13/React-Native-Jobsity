import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, colors } from '@utils';

const HEIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  safeAreaViewStyle: {
    backgroundColor: colors.white1,
    height: '100%',
    width: '100%',
  },
  scrollviewContainer: {
    paddingTop: moderateScale(10),
    backgroundColor: colors.white1,
  },
  image: {
    marginBottom: moderateScale(8),
    width: '100%',
    borderRadius: moderateScale(8),
    height: HEIGHT / 2,
  },
  serieInfo: {
    marginBottom: moderateScale(8),
  },
  bottomInfo: {
    paddingHorizontal: moderateScale(8),
  },
  innerContainer: {
    paddingHorizontal: moderateScale(10),
  },
  summaryStyle: {
    marginTop: moderateScale(8),
  },
});
