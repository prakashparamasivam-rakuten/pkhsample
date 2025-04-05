import React from 'react';
import {
    RenderableItem,
    BackendItem,
} from '../types/index'
import { Text } from 'react-native';
import { SimpleList } from './SimpleList';
import { PollItem } from './list-item/PollItem';
import { TextItem } from './list-item/TextItem';
import MessageItem from './list-item/MessageItem';

const UnknownItem = ({ type }: { type: string }) => (
  <Text style={{ color: 'red' }}>Unsupported content type: {type}</Text>
);

const componentRegistry = (item: BackendItem): React.ReactElement => {
    switch (item.type) {
        case 'text':
            return <TextItem {...item} />;
        case 'poll':
            return <PollItem {...item} />;
        case 'message-brief':
            return <MessageItem {...item} />;
        case 'list':
            return (
                <SimpleList
                    data={item.items.map(mapBackendItemToElement)}
                    keyExtractor={(i) => i.id}
                />
            );
    }
};

function mapBackendItemToElement(item: BackendItem): RenderableItem {
  return {
    id: item.id,
    element: componentRegistry(item) ?? <UnknownItem type={item.type} />,
  };
}

export const DynamicRenderer = ({ data }: { data: BackendItem[] }) => {
  const elements = data.map(mapBackendItemToElement);
  return <SimpleList data={elements} keyExtractor={(item) => item.id} />;
};