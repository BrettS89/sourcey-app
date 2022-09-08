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
    width: 275,
  },
  header: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {

  },
  input: {
    marginBottom: 25,
  },
  buttons: {

  },
  cancelButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  cancelButtonText: {
    fontWeight: '700',
  }
});
