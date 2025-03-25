import React from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList.jsx';
// import Login from './Login';

const App = () => {
  const isAuthenticated = true;
  return (
    <div>
      {isAuthenticated ? <TaskList /> : <h1>Login</h1>}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps)(App);
export default App;
