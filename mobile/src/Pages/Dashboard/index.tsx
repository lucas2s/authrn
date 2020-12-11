import React from 'react';
import { Button } from 'react-native';

import { Container, Title } from './styles';
import { useAuth } from '../../Contexts/auth';

const Dashboard: React.FC = () => {

  const { signOut, user } = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Title>{user?.name}</Title>
      <Title>{user?.email}</Title>
      <Button title="Logout" onPress={handleSignOut}/>
    </Container>
  );
}

export default Dashboard;