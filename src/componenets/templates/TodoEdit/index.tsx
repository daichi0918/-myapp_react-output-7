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
import { useTodoEdit } from "../../../hooks/TodoEdit";


/**
 * @param {id: string } id 
 * @return {JSX.Element}
 */

export const TodoEditTemplate = ({ id } : {id: string }) => {
  // hooksからstateとactionを取得
  const {
    editInputTitleValue,
    editTextareaContentValue,
    handleEditInputTitlChange,
    handleEditTextareaContentChange,
    handleUpdateTodo,
  } = useTodoEdit({id});
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