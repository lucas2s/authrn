import React, { useContext } from 'react';
import { Button } from 'react-native';

import { Container, Title } from './styles';
import AuthContext from '../../Contexts/auth';

const Dashboard: React.FC = () => {

  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Title>Dashboard</Title>
      <Button title="Logout" onPress={handleSignOut}/>
    </Container>
  );
}

export default Dashboard;