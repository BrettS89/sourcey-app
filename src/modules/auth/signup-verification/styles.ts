import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    padding: 60,
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    marginBottom: 35,
  },
});
