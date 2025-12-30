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
      alert('Issue created successfully! 🎉');
      navigate('/');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      {error && <div className="error" style={{position: 'fixed', top: 20, right: 20, zIndex: 1000, maxWidth: '400px'}}>{error}</div>}
      <IssueForm onSubmit={handleSubmit} title="Create New Issue" />
    </>
  );
};

export default CreateIssue;