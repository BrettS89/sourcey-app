import React from 'react';
import { KeyboardAvoidingView, View, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { Navigation } from '../../../types';
import { onVerifySignupEmail } from '../../../redux';
import styles from './styles';
import Typography from '../../../components/typography';
import Input from '../../../components/input';
import Button from '../../../components/button';

const SignupVerification: React.FC<Navigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [code, setCode] = React.useState('');

  const onVerify = () => {
    dispatch(onVerifySignupEmail({ code, navigate: () => navigation.navigate('Home') }));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.content}>
        <Typography styles={styles.text}>
          We emailed you a six digit verification code. Input the code below to verify your email and create your account.
        </Typography>

        <Input
          placeholder='Verification code'
          code
          addedStyles={styles.input}
          onChangeText={val => {
            if (val.length <= 6) {
              setCode(val);
            }
          }}
        />

        <Button onPress={onVerify}>
          Verify
        </Button>
      </View>
      
    </KeyboardAvoidingView>
  );
};

export default SignupVerification;
