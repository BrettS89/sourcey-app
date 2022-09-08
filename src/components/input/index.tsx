import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import IconIcon from '@expo/vector-icons/Ionicons'
import colors from '../../shared/colors';

interface Props {
  icon?: string;
  value?: string;
  onChangeText?(value: string): void;
  placeholder?: string;
  secureTextEntry?: boolean
  onSubmitHandler?: any;
  email?: boolean;
  addedStyles?: Record<string, any>
  code?: boolean;
}

const Input: React.FC<Props> = ({ icon, value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, addedStyles, code }) => {

  const displayIcon = () => {
    if(icon === 'email') {
      return <IconIcon name="person" size={26} color="gray" />;
    }
    if(icon === 'password') {
      return <View style={{ marginLeft: 2 }}><Icon name="unlock-alt" size={28} color="gray" /></View>;
    }
    if(icon === 'firstname') {
      return <Icon name="vcard-o" size={24} color="gray" />
    }
    if(icon === 'lastname') {
      return <Icon name="vcard-o" size={24} color="gray" />
    }
  };

  const getKeyboardType = () => {
    if (email) return 'email-address';
    if (code) return 'number-pad';
    return 'default';
  }

  return (
    <View style={[styles.container, addedStyles || {}]}>
      <View style={[{ paddingRight: icon ? 15 : 0 }]}>
        {displayIcon()}
      </View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
        value={value || undefined}
        keyboardType={getKeyboardType()}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor='gray' 
        autoCapitalize='none'
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: colors.text,
    paddingRight: 3,
    fontSize: 15,
    flex: 1,
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    // paddingVertical: 7,
  }
});

export default Input