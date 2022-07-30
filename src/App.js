import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLog, setIsLog] = useState(true);

  const handleLogin = () => {
    setIsLog(true);
  };

  return (
    <div className="App">
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
