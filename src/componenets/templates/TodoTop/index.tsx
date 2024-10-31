/**
 * TodoTop
 * 
 * @package templates
 */
import './index.css';
import { useTodoTop } from '../../../hooks/TodoTop';
import { InputForm } from '../../atoms/InputForm';
import { TodoList } from '../../organisms/TodoList';

/**
 * @returns {JSX.Element}
 */
export const TodoTopTemplate = () => {
  const {searchKeyWord, handleSearchKeyWordInput, showTodoList, handleDeleteTodoTask, goToDetailPage, goToEditPage}= useTodoTop();

  return (
    <>
      <h1 className='title'>TodoList</h1>
      <div className='contents_container'>
        <div className='content'>
          <InputForm 
            className={'search_input'} 
            placeholder={'Search Keyword'}
            inputValue={searchKeyWord}
            onChange={handleSearchKeyWordInput}
          />
        </div>
        <div className='content'>
          <TodoList showTodoList={showTodoList} handleDeleteTodoTask={handleDeleteTodoTask} goToDetailPage={goToDetailPage} goToEditPage={goToEditPage} />
        </div>
      </div>
    </>
  )
}