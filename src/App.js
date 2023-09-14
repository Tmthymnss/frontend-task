import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import StoreList from './components/StoreList';
import usersData from '../src/data/usersData';
import UserContext, { UserProvider } from './UserContext';
import AddStore from './components/AddStore';
import { AddStoreProvider } from './AddStoreContext';

function App() {
  const [user, setUser] = useState(usersData[0]);

  const unsetUser = () => {
    setUser(null);
  };

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <AddStoreProvider>
        <Router>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<StoreList />} />
          </Routes>
        </Router>
      </AddStoreProvider>
    </UserProvider>
  );
}

export default App;
