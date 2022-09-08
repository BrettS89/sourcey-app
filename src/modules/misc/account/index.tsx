import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from '../../../types';
import withPlayer from '../../../components/player-hoc';
import Typography from '../../../components/typography';
import styles from './styles';

interface Props extends Navigation {}

const Account: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const onPressLogout = async () => {
    dispatch({ type: 'RESET' });
    await AsyncStorage.clear();
    navigation.navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={onPressLogout}>
          <Typography styles={styles.buttonText}>
            Log out
          </Typography>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

export default withPlayer(Account);
