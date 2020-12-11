import React from 'react';
import { Button } from 'react-native';

import { Container, Title } from './styles';
import { useAuth } from '../../Contexts/auth';

const SignIn: React.FC = () => {

  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Title>Sign In</Title>
      <Button title="Sign In" onPress={handleSignIn}/>
    </Container>
  );
}

export default SignIn;