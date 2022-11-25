import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import debounce from 'lodash.debounce';
import { getShows, searchShow } from '@api/services';
import { Card, Header, Loader } from '@components';
import { TAppStackParamsList } from '@router/App.stack';
import { APP_STACK } from '@constants';
import { formatHtml } from '@utils';
import { styles } from './Home.styles';
import { TSeries, TSearchShow, TSerie } from './Home.types';

export const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [series, setSeries] = useState<TSeries>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigation = useNavigation<NavigationProp<TAppStackParamsList>>();

  const fetchSearchShow = async (query: string, cb: (val: any) => void) => {
    const res = await searchShow(query);
    cb(res?.data);
  };
  const debouncedFetchData = debounce((query: string, cb: (val: any) => void) => {
    fetchSearchShow(query, cb);
  }, 300);

  const renderItem = ({ item, index }: { item: TSerie; index: number }) => {
    const summaryFormatted = formatHtml(item?.summary);
    return (
      <View
        style={index % 2 === 0 ? styles.flatlistItemStyleLeft : styles.flatlistItemStyleRight}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(APP_STACK.SERIE_DETAIL, { id: item?.id })}
        >
          <Card
            title={item?.name}
            image={item?.image?.medium}
            description={summaryFormatted}
            rating={item?.rating?.average || 0}
          />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (searchValue) {
          debouncedFetchData(searchValue, (showsResponse) => {
            const getSearchedInfo = showsResponse.map((show: TSearchShow) => show?.show);
            setSeries(getSearchedInfo);
          });
        } else {
          const series = await getShows();
          setSeries(series?.data);
        }
        setIsLoading(false);
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.log('err', err);
        setIsLoading(false);
      }
    })();
  }, [searchValue]);

  if (isLoading) return <Loader />;
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Header onChange={setSearchValue} searchValue={searchValue} withSearchBar={true} />
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={series}
          style={styles.flatListStyle}
          contentContainerStyle={styles.flatlistContentStyle}
          renderItem={renderItem}
          columnWrapperStyle={styles.columnStyle}
          maxToRenderPerBatch={8}
        />
      </View>
    </SafeAreaView>
  );
};
