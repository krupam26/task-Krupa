import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IssueList from './pages/IssueList';
import CreateIssue from './pages/CreateIssue';
import UpdateIssue from './pages/UpdateIssue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/create" element={<CreateIssue />} />
        <Route path="/update/:id" element={<UpdateIssue />} />
      </Routes>
    </Router>
  );
}

export default App;