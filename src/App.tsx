import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { TodoTopPage } from './componenets/pages/TodoTop';
import { TodoCreatePage } from './componenets/pages/TodoCreate';
import { Navbar } from './componenets/organisms/Navbar';
import { TodoDetailPage } from './componenets/pages/TodoDetail';
import { TodoEditPage } from './componenets/pages/TodoEdit';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={< TodoTopPage/>} />
            <Route path="/create" element={<TodoCreatePage />} />
            <Route path="/detail/:id" element={<TodoDetailPage />} />
            <Route path="/edit/:id" element={<TodoEditPage />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
