import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../Services/auth';

import api from '../Services/api';

interface User {
  name: string,
  email: string,
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser ] = useState< User | null>(null);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem('@AUTHRN:user');
      const storageToken = await AsyncStorage.getItem('@AUTHRN:token');

      if(storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }

      setLoading(false);
    }
    loadStoragedData();
  }, [])

  async function signIn() {
    setLoading(true);
    const response = await auth.signIn();
    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@AUTHRN:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AUTHRN:token', response.token);
    setLoading(false);
  }

  function signOut() {
    setLoading(true);
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ signed:!!user, user, loading, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}