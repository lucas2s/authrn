import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ContainerLoading } from './styles';

const Loading: React.FC = () => {
  return (
    <ContainerLoading>
      <ActivityIndicator size='large' color="#ff6677" />
    </ContainerLoading>
  );
}

export default Loading;