// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import NavBar from './nav-Bar'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element = { <Login /> } />
      <Route path="/home" element={ <Home /> } />
    </Routes>
    </>
  )
}

export default App;
