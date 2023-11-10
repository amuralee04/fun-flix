import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {onAuthStateChanged} from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    });

    return unsubscribe;
  }, [dispatch])

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