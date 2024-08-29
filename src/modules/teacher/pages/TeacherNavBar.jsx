import { Link } from 'react-router-dom';

function TeacherNavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/teacher/other-page">Other Page</Link></li>
        {/* Additional links can be added here */}
      </ul>
    </nav>
  );
}

export default TeacherNavBar;
