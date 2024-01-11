// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import List from './pages/List/List';
import User from './pages/User/User';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="content-container">
          <Routes> {/* Updated to Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/list" element={<List />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
