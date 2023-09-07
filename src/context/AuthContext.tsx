import { createContext, useContext, useEffect, useState } from 'react';

import * as SecureStore from 'expo-secure-store';

import loginData from '../../helpers/login.json';

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email?: string, password?: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({ token: null, authenticated: null });

  const register = async (email: string, password: string) => {
    // try {
    //   return axios.post(`${''}/users`, {
    //     email,
    //     password,
    //   });
    // } catch (e) {
    //   return { error: true, msg: (e as any).response.data.msg };
    // }
  };
  const login = async (email?: string, password?: string) => {
    // try {
    // const result = await axios.post(`${''}/auth`, {
    //   email,
    //   password,
    // });

    setAuthState({
      token: loginData.result.usuariosessaotoken.usuariosessaotoken_id,
      authenticated: true,
    });

    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${result.data.token}`;

    await SecureStore.setItemAsync(
      'token_key',
      loginData.result.usuariosessaotoken.usuariosessaotoken_id
    );

    // return result;
    // } catch (e) {
    //   return { error: true, msg: (e as any).response.data.msg };
    // }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('token_key');

    // axios.defaults.headers.common['Authorization'] = '';

    setAuthState({
      token: null,
      authenticated: null,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync('token_key');

      console.log(token);
      if (!token) {
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({ token: null, authenticated: false });
        console.log(token);

        return;
      }
      setAuthState({ token, authenticated: true });
    };
    loadToken();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
