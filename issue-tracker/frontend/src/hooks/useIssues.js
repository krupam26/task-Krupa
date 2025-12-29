import { useState, useEffect } from 'react';
import { getIssues } from '../services/api';

export const useIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getIssues(filters);
        setIssues(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, [filters]);

  return { issues, loading, error, setFilters };
};