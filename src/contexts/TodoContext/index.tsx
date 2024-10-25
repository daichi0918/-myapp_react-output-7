/**
 * TodoContext
 * 
 * @package contexts
 */

import { useState, createContext, ReactNode } from 'react';
import { INITIAL_TODO_LIST, TodoType } from '../../const';

// 型定義
interface TodoContextType {
  originalTodoList: Array<TodoType>;
  setOriginalTodoList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
}

export const TodoContext = createContext<TodoContextType>({
  originalTodoList: [], // 初期の Todo リスト（空）
  setOriginalTodoList: () => {}, // 初期値として空の関数を設定
});

/**
 * @param {ReactNode} children
 * @returns {JSX.Element}
 */
export const TodoProvider = ({children}: {children: ReactNode}) => {
  const [ originalTodoList, setOriginalTodoList] = useState(INITIAL_TODO_LIST);

  return (
    <TodoContext.Provider value={{ originalTodoList, setOriginalTodoList}}>
      {children}
    </TodoContext.Provider>
  )
}