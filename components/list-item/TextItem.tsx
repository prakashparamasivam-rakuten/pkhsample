import React from 'react';
import { Text } from 'react-native';

type TextItemProps = {
  id: string;
  content: string;
};

export const TextItem: React.FC<TextItemProps> = ({ content }) => {
  return <Text>{content}</Text>;
};