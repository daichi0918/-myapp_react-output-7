/**
 * TodoContext
 * 
 * @package contexts
 */

import { useState, createContext, ReactNode } from 'react';
import { INITIAL_TODO_LIST, INITIAL_TODO_LIST_LENGTH, TodoType } from '../../const';

// 型定義
interface TodoContextType {
  originalTodoList: Array<TodoType>;
  setOriginalTodoList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
  todoListLength: number,
  setTodoListLength: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoContext = createContext<TodoContextType>({
  originalTodoList: [], // 初期の Todo リスト（空）
  setOriginalTodoList: () => {}, // 初期値として空の関数を設定
  todoListLength: 2,
  setTodoListLength: () => {}
});

/**
 * @param {ReactNode} children
 * @returns {JSX.Element}
 */
export const TodoProvider = ({children}: {children: ReactNode}) => {
  const [ originalTodoList, setOriginalTodoList] = useState(INITIAL_TODO_LIST);
  const [todoListLength, setTodoListLength] = useState<number>(INITIAL_TODO_LIST_LENGTH);

  return (
    <TodoContext.Provider value={{ originalTodoList, setOriginalTodoList, todoListLength, setTodoListLength}}>
      {children}
    </TodoContext.Provider>
  )
}