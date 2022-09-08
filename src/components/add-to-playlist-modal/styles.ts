import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.background,
    padding: 25,
    borderRadius: 5,
    width: 300,
    height: 350,
  },
  header: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 10,
  },
  playlists: {
    flex: 1,
  },
  closeButtonView: {
   alignItems: 'flex-end'
  },
  closeButtonText: {
    fontWeight: '700',
  },
  playlist: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  playlistText: {
    fontWeight: '800',
    marginLeft: 10,
    fontSize: 16,
  },
  success: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  successText: {
    fontWeight: '800',
    fontSize: 18,
    color: colors.main,
    textAlign: 'center',
  }
});
