import React from 'react';
import './styles/light.css';
import './styles/dark.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  const { theme } = useSelector(state => state);

  return (
    <div className='app' id={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
