import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 15,
  },
  row: {
    marginBottom: 15,
  },
  buttonText: {
    fontWeight: '800',
    color: colors.main,
    fontSize: 16,
  },
});
