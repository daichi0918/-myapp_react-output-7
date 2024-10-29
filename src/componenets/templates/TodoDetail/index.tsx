/**
 * TodoDetail
 * 
 * @package templates
 */

import { useContext } from "react";
import { Params } from "react-router-dom"
import { TodoContext } from "../../../contexts/TodoContext";
import { InputForm } from "../../atoms/InputForm";
import { TextAreaForm } from "../../atoms/TextAreaForm";


/**
 * @param {id: string } id 
 * @return {JSX.Element}
 */
export const TodoDetailTemplate = ( { id } : {id: string } ) => {
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


  return (
    <>
      <>
      <h1 className='title'>ToDo Detail</h1>
      <form className="contents_container">
        <div className='content'>
          <InputForm 
            className={"title_input"}
            inputValue={targetTodo[0].title}
            readonly={true}
          />
        </div>
        <div className='content'>
          <TextAreaForm 
            className={"content_input"} 
            inputValue={targetTodo[0].content || ''}
            readOnly={true}
          />
        </div>
      </form>
      </>
    </>
  )
}