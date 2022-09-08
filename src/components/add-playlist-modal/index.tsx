import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { contentSelector, setAddPlaylistModalOpen, createPlaylist } from '../../redux';
import Button from '../button';
import Input from '../input';
import Typography from '../typography';
import styles from './styles';

const AddPlaylistModal = () => {
  const [name, setName] = React.useState('');

  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const closeModal = () => {
    dispatch(setAddPlaylistModalOpen(false));
  };

  const onPressCreate = () => {
    dispatch(createPlaylist({ name }));
  }

  return (
    <Modal
      transparent
      visible={content.isAddPlaylistModalOpen} 
      animationType='fade'
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Typography styles={styles.header}>
            Create a Playlist
          </Typography>
          <View>
            <Input
              placeholder='Name'
              addedStyles={styles.input}
              onChangeText={setName}
            />
          </View>
          <View>
            <Button onPress={onPressCreate}>
              Create
            </Button>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={closeModal}
            >
              <Typography styles={styles.cancelButtonText}>
                Cancel
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </Modal>
  );
};

export default AddPlaylistModal;
