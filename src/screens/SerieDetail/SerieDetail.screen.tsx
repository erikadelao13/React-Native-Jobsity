import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { Typography, Card, Loader, Header } from '@components';
import { getShowDetail, getSeasons, getEpisodesBySeason } from '@api/services';
import { colors, formatHtml } from '@utils';
import { TAppStackParamsList } from '@router/App.stack';
import { APP_STACK } from '@constants';
import { styles } from './SerieDetail.styles';
import { TSeason } from './SerieDetail.types';
import { TSerie } from '../Home/Home.types';

export const SerieDetail = () => {
  const [serieDetail, setSerieDetail] = useState<TSerie>();
  const [seasons, setSeasons] = useState();
  const [episodesBySeason, setEpisodesBySeason] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigation = useNavigation<NavigationProp<TAppStackParamsList>>();
  const route = useRoute<RouteProp<TAppStackParamsList>>();
  const id = route?.params?.id;
  const genres = serieDetail?.genres?.join(', ');
  const daysScheduled = serieDetail?.schedule?.days?.join(', ');

  const renderEpisodes = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(APP_STACK.EPISODE_DETAIL, { id: item?.id })}
        activeOpacity={0.7}
      >
        <Card
          variant='Horizontal'
          image={item?.image?.medium}
          title={item?.name}
          description={formatHtml(item?.summary)}
          rating={item?.rating?.average || 0}
        />
      </TouchableOpacity>
    );
  };

  const renderSeason = ({ item }: { item: any }) => {
    return (
      <View style={styles.seasonContainer}>
        <Typography style={styles.seasonNumber} variant='H2' bold color={colors.purple3}>
          Season {item.number}
        </Typography>
        <FlatList
          data={episodesBySeason?.[item.number - 1]?.data}
          renderItem={renderEpisodes}
        />
      </View>
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (id) {
          const showDetail = await getShowDetail(id);
          const seasons = await getSeasons(id);
          const episodesBySeason = await Promise.all(
            seasons?.data.map((season: TSeason) => getEpisodesBySeason(season.id)),
          );
          setSerieDetail(showDetail?.data);
          setSeasons(seasons?.data);
          setEpisodesBySeason(episodesBySeason);
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
      <View>
        <FlatList
          style={styles.flatListStyle}
          contentContainerStyle={styles.flatlistContentStyle}
          ListHeaderComponentStyle={styles.listHeaderStyle}
          ListHeaderComponent={
            <View>
              <Image
                source={{
                  uri: serieDetail?.image?.medium,
                }}
                style={styles.image}
              />
              <View style={styles.headerInnerContainer}>
                <Typography variant='H1' color={colors.purple3}>
                  {serieDetail?.name}
                </Typography>
                <Typography style={styles.serieInfo} variant='P' bold color={colors.grey4}>
                  {daysScheduled || 'No days'}, {serieDetail?.schedule?.time || 'No Schedule'}{' '}
                  - {genres}
                </Typography>
                <Typography variant='H3' color={colors.grey4}>
                  {formatHtml(serieDetail?.summary || '')}
                </Typography>
              </View>
            </View>
          }
          data={seasons}
          renderItem={renderSeason}
        />
      </View>
    </SafeAreaView>
  );
};
