/**
 * TodoCreate
 * 
 * @package templates
 */

import { InputForm } from "../../atoms/InputForm"
import './index.css';

/**
 * @returns {JSX.Element}
 */
export const TodoCreateTemplate = () => {
  return (
    <>
      <h1 className='title'>Create Todo</h1>
      <form className="contents_container">
        <div className='content'>
          <input type="text" placeholder="Title" className="title_input"/>
        </div>
        <div className='content'>
          <textarea className="content_input" placeholder="Content"/>
        </div>
        <div className='content'>
          <button className="button" type="submit">
            Create Todo
          </button>
        </div>
      </form>
    </>
  )
}