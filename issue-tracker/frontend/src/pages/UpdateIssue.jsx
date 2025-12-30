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
      alert('Issue updated successfully! ✅');
      navigate('/');
    } catch (err) {
      setError(err);
    }
  };

  if (loading) return <div className="loading">Loading issue...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      {error && <div className="error" style={{position: 'fixed', top: 20, right: 20, zIndex: 1000, maxWidth: '400px'}}>{error}</div>}
      <IssueForm initialValues={initialValues} onSubmit={handleSubmit} title="Update Issue" />
    </>
  );
};

export default UpdateIssue;