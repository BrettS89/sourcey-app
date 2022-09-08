import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../shared/colors';
import Typography from '../typography';
import BackButton from '../back-button';
import AddPlaylist from '../add-playlist-button';

interface Props {
  type: 'back' | 'user-search' | 'discover-search' | 'title';
  addPlaylist?: boolean;
  title?: string;
}

const Header: React.FC<Props> = ({ title, type, addPlaylist }) => {
  const alignCenter = addPlaylist ? { alignItems: 'center' } : {}

  const renderTitle = (
    <Typography styles={styles.title}>
      {title}
    </Typography>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/*@ts-ignore*/}
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', ...alignCenter }}>
      {type === 'back' && <BackButton title={title} />}
      {type === 'title' && renderTitle}
      {addPlaylist && <AddPlaylist />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    height: 92,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: 22,
    fontWeight: '900',
    color: colors.background
  }
});

export default Header;
