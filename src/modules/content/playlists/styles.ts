import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.background,
  },
  playlist: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  playlistImage: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  defaultImageContainer: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 5,
  },
  count: {
    fontWeight: '500',
  },

  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.background,
    padding: 25,
    borderRadius: 5,
    width: 300,
  },
  modalHeader: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 20,
  },
  deleteButtonText: {
    fontWeight: '900',
    color: colors.red,
  },
  closeButtonView: {
    marginTop: 15,
    alignItems: 'flex-end'
  },
  closeButtonText: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalOptionText: {
    fontWeight: '700',
    marginLeft: 10,
    fontSize: 16,
  },
});
