import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router';

import HomeView from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
