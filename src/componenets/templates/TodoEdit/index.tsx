/**
 * TodoEdit
 * 
 * @package templates
 */

import { Button } from "../../atoms/Button"
import { InputForm } from "../../atoms/InputForm"
import { TextAreaForm } from "../../atoms/TextAreaForm"
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
          <InputForm 
            placeholder={"Title"}
            className={"title_input"}
            inputValue={editInputTitleValue}
            onChange={handleEditInputTitlChange}
          />
        </div>
        <div className='content'>
          <TextAreaForm 
            className={"content_input"} 
            placeholder={"Content"}
            inputValue={editTextareaContentValue}
            onChange={handleEditTextareaContentChange}
          />
        </div>
        <div className='content'>
          <Button 
            className={"button"}
            ButtonName={"Edit Todo"}
            onClick={() => handleUpdateTodo(id)}
          />
        </div>
      </form>
    </>
  )
}