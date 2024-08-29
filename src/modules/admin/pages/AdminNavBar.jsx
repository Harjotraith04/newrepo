import { Link } from 'react-router-dom';

function AdminNavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/admin/other-page">Other Page</Link></li>
        {/* Additional links can be added here */}
      </ul>
    </nav>
  );
}

export default AdminNavBar;
