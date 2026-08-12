const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/v1/bookmarks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookmarks ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/v1/bookmarks', async (req, res) => {
  const { title, url, category } = req.body || {};
  if (!title || !url) {
    return res.status(400).json({ error: 'Title and URL are required' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO bookmarks (title, url, category) VALUES ($1, $2, $3) RETURNING *',
      [title, url, category || 'uncategorized']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.delete('/api/v1/bookmarks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM bookmarks WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Bookmark not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Bookmark API running at http://localhost:${PORT}`);
});