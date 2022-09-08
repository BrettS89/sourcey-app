import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, KeyboardAvoidingView, View, Platform } from 'react-native';
import { onLoginAction } from '../../../redux/actions';
import { Navigation } from '../../../types';
import { styles } from './styles';
import Typography from '../../../components/typography';
import Input from '../../../components/input';
import Button from '../../../components/button';

const Login: React.FC<Navigation> = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onLoginPressed = () => {
    dispatch(onLoginAction({
      email,
      password,
      navigate: () => navigate('Home'),
    }));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.form}>
        <Typography styles={styles.logo}>
          Login
        </Typography>
        <Input
          email
          icon='email'
          placeholder='Email'
          addedStyles={{ marginBottom: 25 }}
          onChangeText={setEmail}
          value={email}
        />
        <Input
          secureTextEntry
          icon='password'
          placeholder='Password'
          addedStyles={{ marginBottom: 45 }}
          onChangeText={setPassword}
          value={password}
        />
        <Button
          styles={{ width: '100%', alignItems: 'center', marginBottom: 15, }}
          onPress={onLoginPressed}
        >
          Login
        </Button>
        <Typography styles={styles.or}>
          or
        </Typography>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Typography styles={styles.signup}>
            Sign up
          </Typography>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
