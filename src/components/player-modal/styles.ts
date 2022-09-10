import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.modalBackground,
    paddingHorizontal: 30,
  },
  text: {
    color: colors.lightText,
  },
  title: {
    color: colors.lightText,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5
  },
  officialTitle: {
    color: colors.lightText,
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 7,
  },
  from: {
    color: colors.lightText,
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 5,
  },
  dismissView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  articleContent: {
    marginBottom: 20,
    marginTop: 15,
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
  },
  description: {
    color: colors.lightText,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
    marginTop: 15,
  },
  scrollView: {
    height: 100,
  },
  mainView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marignRight: 10,
  },
  defaultImage: {
    height: 80,
    width: 80,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  trackingView: {
    marginVertical: 20,
  },
  actionsView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  playAction: {
    marginHorizontal: 40,
  },
  volumeView: {

  },
  addToPlaylistView: {
    alignItems: 'center',
  },
  addToPlaylistText: {
    fontWeight: '700',
    color: colors.lightText,
    marginTop: 15,
  }
});
