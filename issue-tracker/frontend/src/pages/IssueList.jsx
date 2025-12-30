import { Link } from 'react-router-dom';
import { useIssues } from '../hooks/useIssues';
import { deleteIssue } from '../services/api';
import { useState } from 'react';

const IssueList = () => {
  const { issues, loading, error, setFilters } = useIssues();
  const [deleteErr, setDeleteErr] = useState(null);

  const handleFilter = (e) => {
    const value = e.target.value || undefined;
    setFilters((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this issue?')) return;
    try {
      await deleteIssue(id);
      setFilters((prev) => ({ ...prev }));
    } catch (err) {
      setDeleteErr(err);
    }
  };

  if (loading) return <div className="loading">Loading issues... 🔄</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <div className="header">
        <h1>🚀 Issue Tracker</h1>
        <p>Manage your team's issues efficiently</p>
      </div>

      <div className="card">
        <div className="filters">
          <select name="status" onChange={handleFilter} className="select">
            <option value="">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <select name="priority" onChange={handleFilter} className="select">
            <option value="">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <Link to="/create" className="btn btn-primary">+ New Issue</Link>
        </div>

        {deleteErr && <div className="error">Delete Error: {deleteErr}</div>}

        <div className="issues-grid">
          {issues.map((issue) => (
            <div key={issue._id} className={`issue-card issue-${issue.priority}`}>
              <h3 className="issue-title">{issue.title}</h3>
              <p className="issue-desc">{issue.description}</p>
              <div className="tags">
                <span className={`tag tag-priority-${issue.priority}`}>Priority: {issue.priority}</span>
                <span className={`tag tag-status-${issue.status}`}>Status: {issue.status.replace('-', ' ')}</span>
              </div>
              <div className="actions">
                <Link to={`/update/${issue._id}`} className="link">✏️ Edit</Link>
                <button onClick={() => handleDelete(issue._id)} className="btn btn-danger">🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>

        {issues.length === 0 && (
          <div className="empty">
            <p>📭 No issues found</p>
            <Link to="/create" className="btn btn-primary" style={{display: 'inline-block', marginTop: '20px'}}>
              Create your first issue!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueList;