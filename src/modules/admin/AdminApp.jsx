import { Routes, Route } from 'react-router-dom';
import AdminNavBar from './pages/AdminNavBar';
import Dashboard from './pages/Dashboard';

function AdminApp() {
  return (
    <div>
      <AdminNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Additional admin routes can be added here */}
      </Routes>
    </div>
  );
}

export default AdminApp;
