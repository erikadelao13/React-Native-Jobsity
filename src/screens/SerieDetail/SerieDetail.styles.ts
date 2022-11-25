import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, colors } from '@utils';

const HEIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  safeAreaViewStyle: {
    backgroundColor: colors.white1,
  },
  image: {
    marginBottom: moderateScale(8),
    width: '100%',
    borderRadius: moderateScale(8),
    height: HEIGHT / 2,
  },
  flatlistContentStyle: {
    marginTop: moderateScale(12),
  },
  flatListStyle: {
    marginBottom: moderateScale(120),
  },
  serieInfo: {
    marginBottom: moderateScale(8),
  },
  listHeaderStyle: {
    paddingHorizontal: moderateScale(10),
  },
  headerInnerContainer: {
    paddingHorizontal: moderateScale(8),
  },
  seasonContainer: {
    paddingHorizontal: moderateScale(12),
  },
  seasonNumber: {
    marginTop: moderateScale(30),
    marginBottom: moderateScale(20),
  },
});
