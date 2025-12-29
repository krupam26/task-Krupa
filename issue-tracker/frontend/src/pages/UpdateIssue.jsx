import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IssueForm from '../components/IssueForm';
import { getIssueById, updateIssue } from '../services/api';

const UpdateIssue = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const data = await getIssueById(id);
        setInitialValues(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchIssue();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await updateIssue(id, data);
      navigate('/');
    } catch (err) {
      setError(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Update Issue</h1>
      {error && <p>Error: {error}</p>}
      <IssueForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default UpdateIssue;