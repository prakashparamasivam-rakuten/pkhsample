import React from 'react';
import { View, Text } from 'react-native';

type PollItemProps = {
  id: string;
  options: string[];
};

export const PollItem: React.FC<PollItemProps> = ({ options }) => {
  return (
    <View>
      {options.map((option, index) => (
        <Text key={index}>{option}</Text>
      ))}
    </View>
  );
};