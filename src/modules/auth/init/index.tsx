import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Navigation } from '../../../types';
import { appLoad } from '../../../redux/actions';

const Init: React.FC<Navigation> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appLoad({ navigate: props.navigation.navigate }));
  }, []);

  return (
    <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Splash
      </Text>
    </View>
  );
}

export default Init;
