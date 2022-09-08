import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../shared/colors';

interface Props {
  styles?: Record<string, any>;
  onPress?: any;
}

const Button: React.FC<Props> = ({ children, onPress, styles }) => {
  return (
    <TouchableOpacity
      style={[defaultStyles.button, styles || {}]}
      onPress={onPress}
    >
      <Text style={[defaultStyles.text]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const defaultStyles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 50,
    paddingHorizontal: 19,
    paddingVertical: 12,
  },
  text: {
    color: colors.background,
    fontWeight: '900',
  }
});