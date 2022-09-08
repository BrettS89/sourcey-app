import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Back from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Typography from '../typography';
import colors from '../../shared/colors';
import { limitText } from '../../utilities/misc';


interface Props {
  title?: string;
  moreStyles?: Record<string, any>;
}

const HeaderBack: React.FC<Props> = ({ moreStyles={}, title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Back name="arrow-left" size={28} color={colors.background} style={styles.icon} />
      </TouchableOpacity>
      {title && (
        <Typography styles={styles.title}>
          {limitText(title, 27)}
        </Typography>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  icon: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  title: {
    marginLeft: 15,
    paddingLeft: 0,
    fontSize: 22,
    fontWeight: '900',
    color: colors.background,
  },
});

export default HeaderBack;
