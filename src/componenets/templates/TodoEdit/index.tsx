/**
 * TodoEdit
 * 
 * @package templates
 */

import { useContext, useState } from "react";
import { Button } from "../../atoms/Button"
import { InputForm } from "../../atoms/InputForm"
import { TextAreaForm } from "../../atoms/TextAreaForm"
import { TodoContext } from "../../../contexts/TodoContext";
import { useNavigate } from "react-router-dom";


/**
 * @param {id: string } id 
 * @return {JSX.Element}
 */

export const TodoEditTemplate = ({ id } : {id: string }) => {
  /**
   * state定義
   */
  const {
    originalTodoList,
    setOriginalTodoList,
    todoListLength,
    setTodoListLength,

  } = useContext(TodoContext);
  // 該当のtodoを取得
  const targetTodo = originalTodoList.filter((todo) => todo.id === Number(id));

  // 初期値設定
  const [editInputTitleValue, setEditInputTitleValue] = useState<string>(targetTodo[0].title);
  const [editTextareaContentValue, setEditTextareaContentValue] = useState<string>(targetTodo[0].content || '');


  const navigate = useNavigate();

  /**
   * action定義
   */
  /**
   * titleの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
    const handleEditInputTitlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEditInputTitleValue(e.target.value);
  /**
   * contentの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleEditTextareaContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setEditTextareaContentValue(e.target.value);
  /**
   * todoListの更新発火処理
   * @param {React.MouseEvent<HTMLButtonElement>} e
   */
  const handleUpdateTodo = (targetId: string) => {
    if(editInputTitleValue !== '') {
      // 疑問：なんで順序変わらないの？？
      const updatedTodoList = originalTodoList.map((todo) => 
      todo.id === Number(targetId)
        ? { ...todo, title: editInputTitleValue, content: editTextareaContentValue }
        : todo
      );
      setOriginalTodoList(updatedTodoList);

      navigate('/');
    }

  }
  return (
    <>
      <h1 className='title'>TodoEdit</h1>
      <form className="contents_container">
        <div className='content'>
          {/* <InputForm 
            placeholder={"Title"}
            className={"title_input"}
            inputValue={addInputTitle}
            onChange={handleAddInputTitleChange}
          /> */}
          <input 
            placeholder={"Title"}
            className={"title_input"}
            value={editInputTitleValue}
            onChange={handleEditInputTitlChange}
          />
        </div>
        <div className='content'>
          {/* <TextAreaForm 
            className={"content_input"} 
            placeholder={"Content"}
            inputValue={addTextAreaContent}
            onChange={handleAddInputContentChange}
          /> */}
          <textarea 
            className={"content_input"} 
            placeholder={"Content"}
            value={editTextareaContentValue}
            onChange={handleEditTextareaContentChange}
          />
        </div>
        <div className='content'>
          {/* <Button className={"button"} onClick={handleCreateTodo} ButtonName={"Create Todo"} /> */}
          <button className="button" onClick={() => handleUpdateTodo(id)}>
            Edit Todo
          </button>
        </div>
      </form>
    </>
  )
}