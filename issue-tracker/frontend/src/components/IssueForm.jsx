import { useState, useEffect } from 'react';

const IssueForm = ({ initialValues = {}, onSubmit, title = "Create Issue" }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'low',
    status: 'open',
  });

  // This useEffect updates the form when editing (Update page)
  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      setFormData({
        title: initialValues.title || '',
        description: initialValues.description || '',
        priority: initialValues.priority || 'low',
        status: initialValues.status || 'open',
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter issue title"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              required
              placeholder="Describe the issue in detail..."
            />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={formData.priority} onChange={handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            {title === "Create Issue" ? 'Create Issue' : 'Update Issue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default IssueForm;