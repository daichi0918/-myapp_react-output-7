/**
 * TodoCreate
 * 
 * @package templates
 */
import './index.css';
import { useTodoCreate } from "../../../hooks/TodoCreate";
import { InputForm } from '../../atoms/InputForm';

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
          {/* <input type="text" placeholder="Title" className="title_input" value={addInputTitle} onChange={handleAddInputTitleChange}/> */}
          <InputForm 
            placeholder={"Title"}
            className={"title_input"}
            inputValue={addInputTitle}
            onChange={handleAddInputTitleChange}
          />
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