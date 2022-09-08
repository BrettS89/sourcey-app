import { Alert } from 'react-native';

export default (title: string, message: string) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'Okay', onPress: () => undefined},
    ],
  );
};