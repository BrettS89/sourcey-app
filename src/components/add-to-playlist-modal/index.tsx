import React from 'react';
import { Modal, View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { contentSelector, setAddToPlaylistModalOpen, setPlaylistItemAdded, addToPlaylist } from '../../redux';
import Typography from '../typography';
import Playlist from './playlist';
import styles from './styles';

const AddToPlaylistModal = () => {
  const [renderSuccess, setRenderSuccess] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const closeModal = () => {
    dispatch(setAddToPlaylistModalOpen(false));
  };

  const onAddToPlaylist = (playlistId: string) => {
    dispatch(addToPlaylist({ playlistId }));
  };

  const renderPlaylists = () => {
    return (
      <View style={styles.playlists}>
        <FlatList
          data={content.playlists}
          keyExtractor={a => a._id}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0}
          renderItem={({ item }) => (
            <Playlist
              playlist={item}
              onAddToPlaylist={onAddToPlaylist}
            />
          )}
        />
      </View>
    ); 
  };

  const renderSuccessComponent = () => {
    return (
      <View style={styles.success}>
        <Typography styles={styles.successText}>
          Successfully added to playlist.
        </Typography>
      </View>
    );
  };

  React.useEffect(() => {
    if (content.playListItemAdded) {
      setRenderSuccess(true);
      setTimeout(() => {
        closeModal();
        dispatch(setPlaylistItemAdded(false));
        setRenderSuccess(false);
      }, 900);
    }
  }, [content.playListItemAdded]);

  return (
    <Modal
      transparent
      visible={content.isAddToPlaylistModalOpen} 
      animationType='fade'
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Typography styles={styles.header}>
            Add to Playlist
          </Typography>

          {!renderSuccess ? renderPlaylists() : renderSuccessComponent()}

          <View style={styles.closeButtonView}>
            <TouchableOpacity onPress={closeModal}>
              <Typography styles={styles.closeButtonText}>
                Close
              </Typography>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Modal>
  );
};

export default AddToPlaylistModal;
