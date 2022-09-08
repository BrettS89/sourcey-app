import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  player: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 15,
    borderRadius: 4,
  },
  defaultImage: {
    height: 50,
    width: 50,
    marginRight: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
});
