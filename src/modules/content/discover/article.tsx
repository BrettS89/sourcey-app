import React from 'react';
import { View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicon from '@expo/vector-icons/FontAwesome5';
import Typography from '../../../components/typography';
import styles from './styles';
import { Article as ArticleType } from '../../../types';
import colors from '../../../shared/colors';

interface Props {
  article: ArticleType;
  selectArticle(article: ArticleType): void;
  playlistItemId?: string;
  openPlaylistItemOptionsModal?(playlistId: string): void;
}

const Article: React.FC<Props> = ({ article, selectArticle, playlistItemId, openPlaylistItemOptionsModal }) => {
  const renderArticleImage = () => {
    if (article.imageFile?.urls?.delivery) {
      return (
        <Image
          style={styles.articleImage}
          resizeMode="cover"
          source={{ uri: article.imageFile?.urls?.delivery }}
        />
      );
    }

    return (
      <View style={styles.defaultImageContainer}>
        <Ionicon
          name='headphones-alt'
          size={60}
          color='darkgray'
        />
      </View>
    );
  };

  const renderOptions = () => {
    if (playlistItemId) {
      return (
        <TouchableOpacity
          style={{ marginLeft: 5, marginTop: 3 }}
          onPress={() => openPlaylistItemOptionsModal!(playlistItemId)}
        >
          <Entypo
            name='dots-three-vertical'
            color={colors.text}
            size={20}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectArticle(article)}>
      <View style={styles.article}>
        {renderArticleImage()}
        <View style={styles.contentContainer}>
          <View style={{ flexShrink: 1, }}>
            <Typography styles={styles.title}>
              {article.title}
            </Typography>
            <Typography styles={styles.from}>
              {article.year} - {article.from}
            </Typography>
            <Typography styles={styles.duration}>
              {article.audioFile.meta.duration}
            </Typography>
          </View>
          {renderOptions()}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Article;
