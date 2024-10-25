import './index.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <section className='common'>
      <nav>
        <ul className='nav_list'>
          <li className='nav_item'>
            <Link to="/">Top</Link>
          </li>
          <li className='nav_item'>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}