const express = require('express');
const router = express.Router();
const issuesController = require('../controllers/issues');

router.post('/', issuesController.createIssue);
router.get('/', issuesController.getAllIssues);
router.get('/:id', issuesController.getIssueById);
router.patch('/:id', issuesController.updateIssue);
router.delete('/:id', issuesController.deleteIssue);

module.exports = router;