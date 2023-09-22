import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                {user ? (
                    <React.Fragment>
                        <Route
                            path='/home'
                            element={<HomePage setUser={setUser} />}
                        />
                        <Route
                            path='*'
                            element={<Navigate to='/' />}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Route
                            path='/'
                            element={<Login setUser={setUser} />}
                        />
                        <Route
                            path='*'
                            element={<Navigate to='/' />}
                        />
                    </React.Fragment>
                )}
            </Routes>
        </BrowserRouter>
    );

}

export default App