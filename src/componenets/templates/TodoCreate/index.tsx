/**
 * TodoCreate
 * 
 * @package templates
 */
import './index.css';
import { useTodoCreate } from "../../../hooks/TodoCreate";
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { Button } from '../../atoms/Button';

/**
 * @returns {JSX.Element}
 */
export const TodoCreateTemplate = () => {
  const {
    addInputTitle,
    addTextAreaContent,

    handleAddInputTitleChange,
    handleAddInputContentChange,
    handleCreateTodo
  } = useTodoCreate();
  return (
    <>
      <h1 className='title'>Create Todo</h1>
      <form className="contents_container">
        <div className='content'>
          <InputForm 
            placeholder={"Title"}
            className={"title_input"}
            inputValue={addInputTitle}
            onChange={handleAddInputTitleChange}
          />
        </div>
        <div className='content'>
          <TextAreaForm 
            className={"content_input"} 
            placeholder={"Content"}
            inputValue={addTextAreaContent}
            onChange={handleAddInputContentChange}
          />
        </div>
        <div className='content'>
          <Button className={"button"} onClick={handleCreateTodo} ButtonName={"Create Todo"} />
        </div>
      </form>
    </>
  )
}