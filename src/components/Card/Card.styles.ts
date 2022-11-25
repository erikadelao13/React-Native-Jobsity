import { StyleSheet } from 'react-native';
import { moderateScale, colors } from '@utils';

export const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: moderateScale(15),
    borderRadius: moderateScale(12),
    backgroundColor: colors.white1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.19,
    shadowRadius: 10.3,

    elevation: 13,
  },
  thumbnail: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(100) / 2,
    marginRight: moderateScale(12),
  },
  image: {
    width: '100%',
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
    height: moderateScale(200),
  },
  bottomContainer: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
  },
  title: {
    flexWrap: 'wrap',
    flex: 1,
  },
  topHeaderSection: {
    marginBottom: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(30) / 2,
    backgroundColor: colors.purple2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalCard: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: moderateScale(12),
    borderRadius: moderateScale(12),
    backgroundColor: colors.white1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10.3,
    height: moderateScale(120),
    elevation: 13,
  },
  innerHorizontalContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    width: '40%',
  },
  rightContainer: {
    width: '60%',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(12),
  },
  imageHorizontal: {
    width: '100%',
    borderRadius: moderateScale(12),
    height: moderateScale(120),
  },
});
