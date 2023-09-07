import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';

import Routes from './src/routes/Routes';
import { AuthProvider } from './src/context/AuthContext';
import { aasd, login } from './src/services/services';

export default function App() {
  const [text, setText] = useState('');

  const { It4rModule } = NativeModules;

  const onPress = () => {
    It4rModule.printEvent(text);
  };

  useEffect(() => {
    (async () => {
      const res = await aasd();

      const a = await login();
    })();
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
