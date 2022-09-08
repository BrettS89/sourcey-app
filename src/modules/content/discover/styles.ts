import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.background,
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  articleImage: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
  defaultImageContainer: {
    height: 90,
    width: 90,
    marginRight: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 5,
  },
  officialTitle: {
    fontStyle: 'italic',
    fontWeight: '500',
    marginBottom: 5,
  },
  from: {
    fontWeight: '500',
  },
  duration: {
    marginTop: 5,
    fontWeight: '500'
  },
});
