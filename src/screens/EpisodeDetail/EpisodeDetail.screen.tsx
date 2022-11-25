import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Image, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { Typography, Loader, Header } from '@components';
import { getEpisodeDetail } from '@api/services';
import { colors, formatHtml } from '@utils';
import { TAppStackParamsList } from '@router/App.stack';
import { styles } from './EpisodeDetail.styles';
import { TSerie } from '../Home/Home.types';

export const EpisodeDetail = () => {
  const [episodeDetail, setEpisodeDetail] = useState<TSerie>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigation = useNavigation<NavigationProp<TAppStackParamsList>>();
  const route = useRoute<RouteProp<TAppStackParamsList>>();
  const id = route?.params?.id;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (id) {
          const episodeDetail = await getEpisodeDetail(id);
          setEpisodeDetail(episodeDetail?.data);
        }
        setIsLoading(false);
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.log('err', err);
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <Header onPressBack={() => navigation.goBack()} withArrowLeft={true} />
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: episodeDetail?.image?.medium,
            }}
            style={styles.image}
          />
          <View style={styles.bottomInfo}>
            <Typography variant='H1' color={colors.purple3}>
              Episode {episodeDetail?.number}, Season {episodeDetail?.season}:{' '}
              {episodeDetail?.name}
            </Typography>
            <Typography style={styles.summaryStyle} variant='H3' color={colors.grey4}>
              {formatHtml(episodeDetail?.summary || '')}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
