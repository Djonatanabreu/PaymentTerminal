import { useState } from 'react';
import { Button, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, onRegister } = useAuth();

  const handleLogin = async () => {
    const result = await onLogin(email, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const handleRegister = async () => {
    const result = await onRegister(email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      onLogin();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          secureTextEntry
        />

        <Button onPress={handleLogin} title='Sign In' />
        <Button onPress={handleRegister} title='Create Account' />
      </View>
    </View>
  );
};
