import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { onDeletePlaylist, contentSelector, closePlaylistOptionsModal } from '../../../redux';
import Typography from '../../../components/typography';
import styles from './styles';

interface Props {
}

const PlaylistOptionsModal: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const closeModal = () => {
    dispatch(closePlaylistOptionsModal());
  };

  const deletePlaylist = () => {
    dispatch(onDeletePlaylist());
  };

  return (
    <Modal
      transparent
      visible={content.playlistOptionsModal.open} 
      animationType='fade'
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Typography styles={styles.modalHeader}>
            Playlist options
          </Typography>
          <TouchableOpacity onPress={deletePlaylist}>
            <Typography styles={styles.deleteButtonText}>
              Delete Playlist
            </Typography>
          </TouchableOpacity>
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

export default PlaylistOptionsModal;
