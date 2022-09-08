import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import withPlayer from '../../../components/player-hoc';
import { contentSelector, selectArticle as selectArticleAction, openPlaylistItemOptionsModal as openPlaylistItemOptionsModalAction } from '../../../redux';
import { Article } from '../../../types';
import PlaylistItemCard from './playlist-item-card';
import PlaylistItemOptionsModal from './playlist-item-options-modal';
import styles from './styles';

const Playlist = () => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const playlist = content.playlists
    .find(p => p._id === content.selectedPlaylist);

  const selectArticle = (article: Article) => {
    dispatch(selectArticleAction({ article, playingFrom: 'playlist', playlistId: playlist?._id }));
  };

  const openPlaylistItemOptionsModal = (playlistId: string) => {
    dispatch(openPlaylistItemOptionsModalAction(playlistId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={playlist?.playlistItems || []}
        keyExtractor={a => a._id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0}
        renderItem={({ item }) => (
          <PlaylistItemCard
            playlistItem={item}
            selectArticle={selectArticle}
            openPlaylistItemOptionsModal={openPlaylistItemOptionsModal}
          />
        )}
      />
      <PlaylistItemOptionsModal />
    </View>
  );
};

export default withPlayer(Playlist);
