import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Playlist as PlaylistType } from '../../types';
import Typography from '../typography';
import styles from './styles';
import colors from '../../shared/colors';

interface Props {
  playlist: PlaylistType;
  onAddToPlaylist(playlistId: string): void;
}

const Playlist: React.FC<Props> = ({ playlist, onAddToPlaylist }) => {
  return (
    <TouchableOpacity style={styles.playlist} onPress={() => onAddToPlaylist(playlist._id)}>
      <Ionicons
        name='list'
        size={30}
        color={colors.main}
      />
      <Typography styles={styles.playlistText}>
        {playlist.name}
      </Typography>
    </TouchableOpacity>
  );
};

export default Playlist;
