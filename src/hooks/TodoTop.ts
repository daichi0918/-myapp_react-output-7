import { useContext, useMemo, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const useTodoTop = () => {
  /**
   * state定義
   */
  const { originalTodoList } = useContext(TodoContext);
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');

  /**
   * action定義
   */
  const handleSearchKeyWordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKeyWord(e.target.value);

  const showTodoList = useMemo(() => {
    return originalTodoList.filter((todo) => {
      const regexp = new RegExp('^' + searchKeyWord, 'i');
      return todo.title.match(regexp);
    });
  }, [searchKeyWord, originalTodoList]);
  return {
    originalTodoList,
    searchKeyWord,
    setSearchKeyWord,
    showTodoList,
    handleSearchKeyWordInput,
  };
};
