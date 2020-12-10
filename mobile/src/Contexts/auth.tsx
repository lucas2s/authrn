import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../Services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser ] = useState< object | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem('@AUTHRN:user');
      const storageToken = await AsyncStorage.getItem('@AUTHRN:token');

      if(storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }
    loadStoragedData();
  }, [])

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    await AsyncStorage.setItem('@AUTHRN:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AUTHRN:token', response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })

  }

  return (
    <AuthContext.Provider value={{ signed:!!user, user, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthContext;