import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [module, setModule] = useState('student');
  const navigate = useNavigate();

  const handleModuleChange = (e) => {
    setModule(e.target.value);
  };

  const handleLogin = () => {
    navigate(`/${module}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={module} onChange={handleModuleChange}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <button onClick={handleLogin}>Go to {module} Dashboard</button>
    </div>
  );
}

export default LoginPage;
