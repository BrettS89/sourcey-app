import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicon from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { Playlist as PlaylistType } from '../../../types';
import Typography from '../../../components/typography';
import styles from './styles';
import colors from '../../../shared/colors';

interface Props {
  playlist: PlaylistType;
  selectPlaylist(playlistId: string): void;
  openModal(playlistId: string): void;
}

const Playlist: React.FC<Props> = ({ playlist, selectPlaylist, openModal }) => {
  const renderImage = () => {
    return (
      <TouchableOpacity
        style={styles.defaultImageContainer}
        onPress={() => selectPlaylist(playlist._id)}
      >
        <Ionicon
          name='headphones-alt'
          size={40}
          color='darkgray'
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.playlist}>
      {renderImage()}
      <View style={styles.contentContainer}>
        <View>
          <TouchableOpacity onPress={() => selectPlaylist(playlist._id)}>
            <Typography styles={styles.name}>
              {playlist.name}
            </Typography>
          </TouchableOpacity>
          <Typography styles={styles.count}>
            {playlist.count || 0} Articles
          </Typography>
        </View>

        <TouchableOpacity
          style={{ marginLeft: 5, marginTop: 3 }}
          onPress={() => openModal(playlist._id)}
        >
          <Entypo
            name='dots-three-vertical'
            color={colors.text}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Playlist;
