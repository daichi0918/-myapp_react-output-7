/**
 * TodoList
 * 
 * @package organisms
 */
import './index.css';
import { TodoType } from "../../../const";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

type TodoListType = {
  showTodoList: Array<TodoType>;
  handleDeleteTodoTask:  (targetId: number, taskName: string) => void;
  goToDetailPage: (targetId: number) => void;
}

/**
 * 
 * @param props 
 * @returns {JSX.Element}
 */
export const TodoList = (props: TodoListType) => {
  const {showTodoList, handleDeleteTodoTask, goToDetailPage} = props;

  return (
    <ul className='todo_top_list'>
    {
      showTodoList.length > 0 && 
      (
        showTodoList.map((todo: TodoType) => 
          (
            <li key={todo.id} className={'todo_top_item'}>
              <span>{todo.title}</span>
              <div className={"todo_top_icons"}>
                <div className='icon_wrapper'>
                  <FontAwesomeIcon icon={faFile} size='lg' onClick={() => goToDetailPage(todo.id)}/>
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
  )
}
