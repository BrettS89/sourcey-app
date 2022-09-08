import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, KeyboardAvoidingView, View, Platform } from 'react-native';
import { onInitiateSignup } from '../../../redux/actions';
import { Navigation } from '../../../types';
import { styles } from './styles';
import Typography from '../../../components/typography';
import Input from '../../../components/input';
import Button from '../../../components/button';

const Signup: React.FC<Navigation> = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onSignupPressed = () => {
    dispatch(onInitiateSignup({
      email,
      password,
      navigate: () => navigate('SignupVerification'),
    }));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.form}>
        <Typography styles={styles.logo}>
          Sign up
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
          onPress={onSignupPressed}
        >
          Sign up
        </Button>
        <Typography styles={styles.or}>
          or
        </Typography>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Typography styles={styles.signup}>
            Login
          </Typography>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
