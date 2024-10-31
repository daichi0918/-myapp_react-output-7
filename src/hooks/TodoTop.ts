/**
 * TodoTop
 *
 * @packge hooks
 */

import { useContext, useMemo, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useNavigate } from 'react-router-dom';

/**
 * useTodoTop
 */
export const useTodoTop = () => {
  const navigate = useNavigate();
  /**
   * state定義
   */
  const { originalTodoList, setOriginalTodoList } = useContext(TodoContext);
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');

  /**
   * action定義
   */
  /**
   * searchKeyWordの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleSearchKeyWordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKeyWord(e.target.value);

  /**
   * 表示用TodoList
   */
  const showTodoList = useMemo(() => {
    return originalTodoList.filter((todo) => {
      const regexp = new RegExp('^' + searchKeyWord, 'i');
      return todo.title.match(regexp);
    });
  }, [searchKeyWord, originalTodoList]);

  /**
   * todoの削除処理
   * @param { number } targetId
   * @param { string } taskName
   */
  const handleDeleteTodoTask = (targetId: number, taskName: string) => {
    if (window.confirm(`「${taskName}」を削除していいですか？`)) {
      const newTodoList = originalTodoList.filter(
        (todo) => todo.id !== targetId
      );
      setOriginalTodoList(newTodoList);
    }
  };
  /**
   * 詳細ページ遷移
   * @param { number } targetId
   */
  const goToDetailPage = (targetId: number) => {
    navigate(`/detail/${targetId}`);
  };

  /**
   * 編集ページ遷移
   * @param { number } targetId
   */
  const goToEditPage = (targetId: number) => {
    navigate(`/edit/${targetId}`);
  };

  return {
    originalTodoList,
    setOriginalTodoList,
    searchKeyWord,
    setSearchKeyWord,
    showTodoList,
    handleSearchKeyWordInput,
    handleDeleteTodoTask,
    goToDetailPage,
    goToEditPage,
  };
};
