import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  const [isLog, setIsLog] = useState(true);
  const [isReg, setIsReg] = useState(false);

  const handleLogin = () => {
    setIsLog(true);
  };

  return (
    <div className="App">
      {/* <Register className='login-form'/> */}
      {!isLog ? (
        <Login
          className={isLog && 'login-form'}
          setIsLog={setIsLog}
          handleLogin={handleLogin}
        />
      ) : (
        <Dashboard className={!isLog && 'dashboard'}/>
      )}
    </div>
  );
}

export default App;
