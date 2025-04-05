import React from 'react';
import { FlatList, type FlatListProps } from 'react-native';
import {RenderableItem} from '../types/index'



type SimpleListProps = Omit<FlatListProps<RenderableItem>, 'renderItem'>;

export const SimpleList: React.FC<SimpleListProps> = (props) => {
  return (
    <FlatList
      {...props}
      renderItem={({ item }) => item.element}
    />
  );
};
