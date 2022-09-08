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
    fontSize: 20,
    fontWeight: '900',
    marginVertical: 10,
    marginBottom: 7
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
  },
  dismissView: {
    width: '100%',
    alignItems: 'center',
  },
  mainView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height:110,
    borderRadius: 5,
  },
  defaultImage: {
    height: 175,
    width: 175,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  trackingView: {
    marginVertical: 30,
  },
  actionsView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
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
