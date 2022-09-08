import React from 'react';
import { View, Modal, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSelector, useDispatch } from 'react-redux';
import Ionicon from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { playerSelector, togglePlayerModal, onPressPause, onPressPlay, setPlaybackProgress, setAddToPlaylistModalOpen, onNext, onPrevious } from '../../redux';
import Typography from '../typography';
import styles from './styles';
import colors from '../../shared/colors';
import audio from '../../utilities/audio';
import AddToPlaylistModal from '../add-to-playlist-modal';

const { width } = Dimensions.get('window');

const PlayerModal = () => {
  const dispatch = useDispatch();
  const player = useSelector(playerSelector);

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [seekingValue, setSeekingValue] = React.useState<number>(0);

  const closeModal = () => {
    dispatch(togglePlayerModal(false));
  };

  const openAddToPlaylistModal = () => {
    dispatch(setAddToPlaylistModalOpen(true));
  };

  const toggleIsPlaying = (isPlaying: boolean) => {
    if (!player.article) return;

    if (isPlaying) {
      dispatch(onPressPlay());
    } else {
      dispatch(onPressPause());
    }
  };

  const onPressNext = () => {
    dispatch(onNext());
  };

  const onPressPrevious = () => {
    dispatch(onPrevious());
  }

  const calculateSeekBar = () => {
    if (player.progress !== 0 && player.duration !== 0) {
      return player.progress / player.duration;
    }

    return 0;
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
          size={110}
          color='darkgrey'
        />
      </View>
    )
  };

  const renderPlayOrPause = () => {
    if (player.isPlaying) {
      return (
      <TouchableOpacity onPress={() => toggleIsPlaying(false)} style={styles.playAction}>
        <Ionicon
          name='pause'
          size={60}
          color={colors.lightText}
        />
      </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={() => toggleIsPlaying(true)} style={styles.playAction}>
        <Ionicon
          name='play'
          size={60}
          color={colors.lightText}
        />
      </TouchableOpacity>
    );
  }

  return (
    <Modal
      transparent
      visible={player.isPlayerModalOpen} 
      animationType='slide'
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.dismissView}>
          <TouchableOpacity onPress={closeModal}>
            <Typography
              styles={styles.text}
            >
              Dismiss
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>

          {renderImage()}

          <View style={{ paddingHorizontal: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Typography styles={styles.title}>
              {player.article?.title}
            </Typography>

            <Typography styles={styles.officialTitle}>
              {player.article?.officialTitle}
            </Typography>
            <Typography styles={styles.from}>
              {player.article?.from}
            </Typography>
          </View>


          <View style={styles.trackingView}>
          <Slider
            value={calculateSeekBar()}
            onValueChange={(value) => {
              if (!player.duration) return;
              const time = value * player.duration;
              setSeekingValue(time);
            }}
            onSlidingStart={() => {
              if (player.isPlaying) {
                toggleIsPlaying(false);
                setIsPlaying(true);
              } else {
                setIsPlaying(false);
              }
            }}
            onSlidingComplete={async () => {
              await audio.setPositionAsync(seekingValue);
              dispatch(setPlaybackProgress({ duration: player.duration!, progress: seekingValue }))

              if (isPlaying) {
                toggleIsPlaying(true);
              }
            }}
            style={{ width: width - 60, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={colors.main}
            maximumTrackTintColor={colors.background}
          />
          </View>

          <View style={styles.actionsView}>
            <TouchableOpacity onPress={onPressPrevious}>
              <Ionicon
                name='play-skip-back'
                size={60}
                color={colors.lightText}
              />
            </TouchableOpacity>

            {renderPlayOrPause()}

            <TouchableOpacity onPress={onPressNext}>
              <Ionicon
                name='play-skip-forward'
                size={60}
                color={colors.lightText}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.addToPlaylistView}>
            <TouchableOpacity onPress={openAddToPlaylistModal}>
              <Typography styles={styles.addToPlaylistText}>
                Add to playlist
              </Typography>
            </TouchableOpacity>
          </View>

        </View>
        <AddToPlaylistModal />

      </SafeAreaView>
    </Modal>
  );
};

export default PlayerModal;
