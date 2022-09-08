import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlaybackProgress } from './redux';
import Navigation from './navigation';
import audio from './utilities/audio';

const Main = () => {
  const dispatch = useDispatch();

  audio.setOnPlaybackStatusUpdate(status => {
    if (status.isLoaded && status.isPlaying) {
      dispatch(setPlaybackProgress({ duration: status.durationMillis!, progress: status.positionMillis, ...status }))
    }
  });

  return (
    <Navigation />
  );
};

export default Main;