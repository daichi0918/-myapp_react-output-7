/**
 * TodoCreate
 * 
 * @package templates
 */

import { useContext, useState } from "react";
import { InputForm } from "../../atoms/InputForm"
import './index.css';
import { TodoContext } from "../../../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

/**
 * @returns {JSX.Element}
 */
export const TodoCreateTemplate = () => {
  /**
   * state定義
   */
  const { originalTodoList, setOriginalTodoList, todoListLength, setTodoListLength } = useContext(TodoContext);
  const [addInputTitle, setAddInputTitle] = useState<string>("");
  const [addTextAreaContent, setAddTextAreaContent] = useState<string>("");

  const navigate = useNavigate(); 

  /**
   * action定義
   */
  /**
   * titleの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleAddInputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAddInputTitle(e.target.value);
  /**
   * contentの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleAddInputContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAddTextAreaContent(e.target.value);
  /**
   * todoListの追加発火処理
   * @param {React.MouseEvent<HTMLButtonElement>} e
   */
  const handleCreateTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(addInputTitle !== '') {
      const newId = todoListLength + 1;
      const newTodoList = [
        ...originalTodoList, 
        {
          id: newId,
          title: addInputTitle,
          content: addTextAreaContent
        }
      ]
      setOriginalTodoList(newTodoList);
      setAddInputTitle('');
      setAddTextAreaContent('');
      setTodoListLength(newId);

      navigate("/");
    }
  }
  return (
    <>
      <h1 className='title'>Create Todo</h1>
      <form className="contents_container">
        <div className='content'>
          <input type="text" placeholder="Title" className="title_input" value={addInputTitle} onChange={handleAddInputTitleChange}/>
        </div>
        <div className='content'>
          <textarea className="content_input" placeholder="Content" value={addTextAreaContent} onChange={handleAddInputContentChange}/>
        </div>
        <div className='content'>
          <button className="button" onClick={handleCreateTodo}>
            Create Todo
          </button>
        </div>
      </form>
    </>
  )
}