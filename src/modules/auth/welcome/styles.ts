import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 40,
    fontWeight: '900',
  },
  logo2: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.main,
  },
  button: {
    width: 200,
    marginBottom: 8
  },
});
