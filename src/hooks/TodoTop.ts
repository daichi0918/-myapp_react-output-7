import { useContext, useMemo, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const useTodoTop = () => {
  /**
   * state定義
   */
  const { originalTodoList, setOriginalTodoList } = useContext(TodoContext);
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

  const handleDeleteTodoTask = (targetId: number, taskName: string) => {
    if (window.confirm(`「${taskName}」を削除していいですか？`)) {
      const newTodoList = originalTodoList.filter(
        (todo) => todo.id !== targetId
      );
      setOriginalTodoList(newTodoList);
    }
  };
  return {
    originalTodoList,
    setOriginalTodoList,
    searchKeyWord,
    setSearchKeyWord,
    showTodoList,
    handleSearchKeyWordInput,
    handleDeleteTodoTask,
  };
};
