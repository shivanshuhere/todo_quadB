

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store/store.js';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './App.css';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </Provider>
  );
}


export default App