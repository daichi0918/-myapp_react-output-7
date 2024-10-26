/**
 * TodoTop
 * 
 * @package templates
 */
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useTodoTop } from '../../../hooks/TodoTop';
import { TodoType } from '../../../const';

/**
 * @returns {JSX.Element}
 */
export const TodoTopTemplate = () => {
  const {searchKeyWord, handleSearchKeyWordInput, showTodoList, handleDeleteTodoTask}= useTodoTop();



  return (
    <>
      <h1 className='title'>TodoList</h1>
      <div className='contents_container'>
        <div className='content'>
          <input type='text' className='search_input' placeholder='Search Keyword' value={searchKeyWord} onChange={handleSearchKeyWordInput} /> 
        </div>
        <div className='content'>
          <ul className='todo_top_list'>
            {
              showTodoList.length > 0 && (
                showTodoList.map((todo: TodoType) => 
                  (
                    <li key={todo.id} className={'todo_top_item'}>
                      <span>{todo.title}</span>
                      <div className={"todo_top_icons"}>
                        <div className='icon_wrapper'>
                          <FontAwesomeIcon icon={faFile} size='lg'/>
                        </div>
                        <div className='icon_wrapper'>
                          <FontAwesomeIcon icon={faPenToSquare} size='lg'/>
                        </div>
                        <div className='icon_wrapper'>
                          <FontAwesomeIcon icon={faTrashCan} size='lg' onClick={() => handleDeleteTodoTask(todo.id, todo.title)}/>
                        </div>
                      </div>
                    </li>
                  )
                )
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}