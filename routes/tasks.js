const express = require('express');
const router = express.Router();
const db = require('../db');

// Create Task
router.post('/', async (req, res) => {
  const { title, description, due_date, user_email } = req.body;
  const result = await db.query(
    'INSERT INTO tasks (title, description, due_date, user_email) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, due_date, user_email]
  );
  res.json(result.rows[0]);
});

// Get Tasks
router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM tasks ORDER BY due_date ASC');
  res.json(result.rows);
});

// Delete Task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.json({ success: true });
});

module.exports = router;
