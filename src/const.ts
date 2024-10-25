export type TodoType = {
  id: number;
  title: string;
  content?: string;
};

export const INITIAL_TODO_LIST: Array<TodoType> = [
  {
    id: 1,
    title: 'Todo1',
    content: 'Todo1 Content',
  },
  {
    id: 2,
    title: 'Todo2',
    content: 'Todo12 Content',
  },
];

export const INITIAL_TODO_LIST_LENGTH: number = INITIAL_TODO_LIST.length;
