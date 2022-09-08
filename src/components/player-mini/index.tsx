import { View, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicon from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { playerSelector, setIsPlaying, onPressPlay, onPressPause, togglePlayerModal } from '../../redux';
import Typography from '../typography';
import styles from './styles';
import colors from '../../shared/colors';
import { limitText } from '../../utilities/misc';

const PlayerMini = () => {
  const dispatch = useDispatch();
  const player = useSelector(playerSelector);

  const toggleIsPlaying = (isPlaying: boolean) => {
    if (!player.article) return;

    if (isPlaying) {
      dispatch(onPressPlay());
    } else {
      dispatch(onPressPause());
    }
  };

  const openPlayerModal = () => {
    dispatch(togglePlayerModal(true));
  };

  const renderImage = () => {
    const imageUrl = player.article?.file?.urls?.delivery;

    if (imageUrl) {
      return (
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: imageUrl }}
        />
      );
    }

    return (
      <View style={styles.defaultImage}>
        <FontAwesome5
          name='headphones-alt'
          size={30}
          color='darkgrey'
        />
      </View>
    )
  };

  const renderPlayOrPause = () => {
    if (player.isPlaying) {
      return (
      <TouchableOpacity onPress={() => toggleIsPlaying(false)}>
        <Ionicon
          name='pause'
          size={30}
          color={colors.text}
        />
      </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={() => toggleIsPlaying(true)}>
        <Ionicon
          name='play'
          size={30}
          color={colors.text}
        />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.player}
      onPress={openPlayerModal}
    >
      <View style={styles.content}>
        {renderImage()}
        <Typography styles={styles.title}>
          {limitText(player.article?.title || '...', 35)}
        </Typography>
      </View>
      {renderPlayOrPause()}
    </TouchableOpacity>
  );
};

export default PlayerMini;
