/**
 * TodoCreate
 *
 * @packge hooks
 */

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';

/**
 * useTodoTop
 */
export const useTodoCreate = () => {
  /**
   * state定義
   */
  const {
    originalTodoList,
    setOriginalTodoList,
    todoListLength,
    setTodoListLength,
  } = useContext(TodoContext);
  const [addInputTitle, setAddInputTitle] = useState<string>('');
  const [addTextAreaContent, setAddTextAreaContent] = useState<string>('');

  const navigate = useNavigate();

  /**
   * action定義
   */
  /**
   * titleの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleAddInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddInputTitle(e.target.value);
  /**
   * contentの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleAddInputContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setAddTextAreaContent(e.target.value);
  /**
   * todoListの追加発火処理
   * @param {React.MouseEvent<HTMLButtonElement>} e
   */
  const handleCreateTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (addInputTitle !== '') {
      const newId = todoListLength + 1;
      const newTodoList = [
        ...originalTodoList,
        {
          id: newId,
          title: addInputTitle,
          content: addTextAreaContent,
        },
      ];
      setOriginalTodoList(newTodoList);
      setAddInputTitle('');
      setAddTextAreaContent('');
      setTodoListLength(newId);

      navigate('/');
    }
  };

  return {
    addInputTitle,
    addTextAreaContent,
    setAddInputTitle,
    setAddTextAreaContent,
    handleAddInputTitleChange,
    handleAddInputContentChange,
    handleCreateTodo,
  };
};
