import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { contentSelector, openPlaylistOptionsModal, setSelectedPlaylist } from '../../../redux';
import { Navigation } from '../../../types';
import withPlayer from '../../../components/player-hoc';
import Playlist from './playlist-card';
import PlaylistOptionsModal from './playlist-options-modal';
import styles from './styles';

const Playlists: React.FC<Navigation> = ({ navigation }) => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const selectPlaylist = (playlistId: string) => {
    dispatch(setSelectedPlaylist(playlistId));
    navigation.navigate('PlaylistScreen');
  };

  const openModal = (playlistId: string) => {
    dispatch(openPlaylistOptionsModal(playlistId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={content.playlists}
        keyExtractor={a => a._id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0}
        renderItem={({ item }) => (
          <Playlist
            playlist={item}
            selectPlaylist={selectPlaylist}
            openModal={openModal}
          />
        )}
      />
      <PlaylistOptionsModal />
    </View>
  );
};

export default withPlayer(Playlists);
