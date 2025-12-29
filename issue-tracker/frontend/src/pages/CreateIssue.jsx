import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueForm from '../components/IssueForm';
import { createIssue } from '../services/api';

const CreateIssue = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await createIssue(data);
      navigate('/');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Create Issue</h1>
      {error && <p>Error: {error}</p>}
      <IssueForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateIssue;