import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoTopPage } from './componenets/pages/TodoTop';
import { TodoCreatePage } from './componenets/pages/TodoCreate';
import { Navbar } from './componenets/organisms/Navbar';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={< TodoTopPage/>} />
            <Route path="/create" element={<TodoCreatePage />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
