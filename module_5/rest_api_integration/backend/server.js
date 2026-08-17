const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// Use Render's port when deployed, otherwise use port 5000 locally
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Bookmark API is running');
});

// GET all bookmarks
app.get('/api/v1/bookmarks', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM bookmarks ORDER BY id ASC'
        );

        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// POST a new bookmark
app.post('/api/v1/bookmarks', async (req, res) => {
    const { title, url, category } = req.body || {};

    if (!title || !url) {
        return res.status(400).json({
            error: 'Title and URL are required'
        });
    }

    try {
        const result = await pool.query(
            `INSERT INTO bookmarks (title, url, category)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [title, url, category || 'uncategorized']
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// DELETE a bookmark
app.delete('/api/v1/bookmarks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM bookmarks WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                error: 'Bookmark not found'
            });
        }

        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});