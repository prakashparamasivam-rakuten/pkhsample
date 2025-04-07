// types/backend.ts

export type BackendTextItem = {
  type: 'text';
  id: string;
  content: string;
};

export type BackendPollItem = {
  type: 'poll';
  id: string;
  options: string[];
};

export type BackendListItem = {
  type: 'list';
  id: string;
  items: BackendItem[];
};

export type BackendExpandableItem = {
  type: 'expandable';
  id: string;
  title: string;
  items: BackendItem[];
};

export type MessageBrief = {
    type:'message-brief',
    id:string,
    name:string,
    message:string,
    imageUri:string
}

export type BackendItem =
  | BackendTextItem
  | BackendPollItem
  | BackendListItem
  | MessageBrief
  //| BackendExpandableItem;