import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';

interface Props {
  styles?: Record<string, any>;
  onPress?: any;
}

const IconButton: React.FC<Props> = ({ onPress, styles }) => {
  return (
    <TouchableOpacity
      style={[defaultStyles.button, styles || {}]}
      onPress={onPress}
    >
      <MaterialIcon
        name='check-bold'
        color={colors.background}
        style={defaultStyles.icon}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const defaultStyles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 50,
    paddingHorizontal: 19,
    paddingVertical: 8,
  },
  icon: {
    fontSize: 32,
  },
});
