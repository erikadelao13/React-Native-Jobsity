import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';
import { styles } from './Card.styles';
import { TCardProps } from './Card.types';

export const Card: React.FC<TCardProps> = ({
  title,
  image,
  description,
  rating,
  variant = 'Vertical',
}) => {
  switch (variant) {
    case 'Vertical':
      return (
        <View style={styles.card}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <View style={styles.topHeaderSection}>
              <Typography
                numberOfLines={2}
                style={styles.title}
                variant='H2'
                color={colors.purple3}
              >
                {title}
              </Typography>
              <View style={styles.rating}>
                <Typography variant='P' color={colors.white}>
                  {rating}
                </Typography>
              </View>
            </View>
            <Typography numberOfLines={3} variant='P' color={colors.grey4}>
              {description}
            </Typography>
          </View>
        </View>
      );

    case 'Horizontal':
      return (
        <View style={styles.horizontalCard}>
          <View style={styles.innerHorizontalContainer}>
            <View style={styles.leftContainer}>
              <Image
                source={{
                  uri: image,
                }}
                style={styles.imageHorizontal}
              />
            </View>
            <View style={styles.rightContainer}>
              <Typography numberOfLines={1} variant='H3' bold color={colors.purple3}>
                {title}
              </Typography>
              <Typography numberOfLines={4} variant='P' color={colors.grey4}>
                {description}
              </Typography>
            </View>
          </View>
        </View>
      );

    default:
      return (
        <View style={styles.card}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <View style={styles.topHeaderSection}>
              <Typography
                numberOfLines={2}
                style={styles.title}
                variant='H2'
                color={colors.purple3}
              >
                {title}
              </Typography>
              <View style={styles.rating}>
                <Typography variant='P' color={colors.white}>
                  {rating}
                </Typography>
              </View>
            </View>
            <Typography numberOfLines={4} variant='P' color={colors.grey4}>
              {description}
            </Typography>
          </View>
        </View>
      );
  }
};
