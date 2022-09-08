import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  form: {
    // marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: 275,
  },
  logo: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 30,
  },
  or: {
    marginBottom: 15,
  },
  signup: {
    fontWeight: '900',
    color: colors.main,
  }
});
