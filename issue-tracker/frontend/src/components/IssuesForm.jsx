import { useState } from 'react';

const IssueForm = ({ initialValues = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: initialValues.title || '',
    description: initialValues.description || '',
    priority: initialValues.priority || 'low',
    status: initialValues.status || 'open',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input name="title" value={formData.title} onChange={handleChange} required />
      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />
      <label>Priority:</label>
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label>Status:</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IssueForm;