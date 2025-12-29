const Issue = require('../models/issue');

exports.createIssue = async (req, res, next) => {
  try {
    const { title, description, priority, status } = req.body;
    if (!title || !description || !priority || !status) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const issue = new Issue(req.body);
    await issue.save();
    res.status(201).json(issue);
  } catch (err) {
    next(err);
  }
};

exports.getAllIssues = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.priority) filter.priority = req.query.priority;
    const issues = await Issue.find(filter);
    res.json(issues);
  } catch (err) {
    next(err);
  }
};

exports.getIssueById = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.json(issue);
  } catch (err) {
    next(err);
  }
};

exports.updateIssue = async (req, res, next) => {
  try {
    const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.json(issue);
  } catch (err) {
    next(err);
  }
};

exports.deleteIssue = async (req, res, next) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.status(204).json({ message: 'Issue deleted' });
  } catch (err) {
    next(err);
  }
};