import React, { useContext } from 'react';
import { Button } from 'react-native';

import { Container, Title } from './styles';
import AuthContext from '../../Contexts/auth';

const SignIn: React.FC = () => {

  const { signed, user, signIn } = useContext(AuthContext);

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