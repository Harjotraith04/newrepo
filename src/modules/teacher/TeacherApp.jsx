import { Routes, Route } from 'react-router-dom';
import TeacherNavBar from './pages/TeacherNavBar';
import Dashboard from './pages/Dashboard';

function TeacherApp() {
  return (
    <div>
      <TeacherNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Additional teacher routes can be added here */}
      </Routes>
    </div>
  );
}

export default TeacherApp;
