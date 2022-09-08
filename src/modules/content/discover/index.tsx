import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { contentSelector, selectArticle as selectArticleAction } from '../../../redux';
import withPlayer from '../../../components/player-hoc';
import styles from './styles';
import Article from './article';
import { Article as ArticleType } from '../../../types';

const hideSplashScreen = async () => {
  await SplashScreen.hideAsync();
}

const Discover = () => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const selectArticle = (article: ArticleType) => {
    dispatch(selectArticleAction({ article, playingFrom: 'discover' }));
  };

  React.useEffect(() => {
    setTimeout(hideSplashScreen, 500);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={content.articles}
        keyExtractor={a => a._id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0}
        renderItem={({ item }) => (
          <Article
            article={item}
            selectArticle={selectArticle}
          />
        )}
      />
    </View>
  );
};

export default withPlayer(Discover);
