import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {onAuthStateChanged} from 'firebase/auth'

function App() {

  //Temporary
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        //In
        console.log(userAuth)
      } else {
        //Out
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/test" element={<h1>WHY</h1>} />
        </Routes>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;