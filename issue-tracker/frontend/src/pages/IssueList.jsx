import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIssues } from '../hooks/useIssues';
import { deleteIssue } from '../services/api';

const IssueList = () => {
  const { issues, loading, error, setFilters } = useIssues();
  const [deleteErr, setDeleteErr] = useState(null);

  const handleFilter = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value || undefined }));
  };

  const handleDelete = async (id) => {
    try {
      await deleteIssue(id);
      setFilters((prev) => ({ ...prev })); // Trigger refetch
    } catch (err) {
      setDeleteErr(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Issue List</h1>
      <Link to="/create">Create New Issue</Link>
      <div>
        <select name="status" onChange={handleFilter} defaultValue="">
          <option value="">All Status</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        <select name="priority" onChange={handleFilter} defaultValue="">
          <option value="">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      {deleteErr && <p>Error: {deleteErr}</p>}
      <ul>
        {issues.map((issue) => (
          <li key={issue._id}>
            {issue.title} ({issue.priority}, {issue.status})
            <Link to={`/update/${issue._id}`}>Edit</Link>
            <button onClick={() => handleDelete(issue._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;