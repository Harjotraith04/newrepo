import { Routes, Route } from 'react-router-dom';
import StudentNavBar from './pages/StudentNavBar';
import Dashboard from './pages/Dashboard';

function StudentApp() {
  return (
    <div>
      <StudentNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Additional student routes can be added here */}
      </Routes>
    </div>
  );
}

export default StudentApp;
