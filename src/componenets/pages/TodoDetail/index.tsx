/**
 * TodoDetail
 * 
 * @package pages
 */

import { useParams } from "react-router-dom";
import { TodoDetailTemplate } from "../../templates/TodoDetail"


/**
 * @param {} *
 * @return {JSX.Element}
 */
export const TodoDetailPage = () => {
  const {id}  = useParams();
  return (
    <TodoDetailTemplate id={id || ''}/>
  )
}