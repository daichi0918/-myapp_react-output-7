/**
 * TodoEdit
 * 
 * @package pages
 */
import { useParams } from "react-router-dom";
import { TodoEditTemplate } from "../../templates/TodoEdit";


/**
 * @param {} *
 * @return {JSX.Element}
 */
export const TodoEditPage = () => {
  const {id}  = useParams();
  return (
    <TodoEditTemplate id={id || ''}/>
  )
}