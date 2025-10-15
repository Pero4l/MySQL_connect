// controllers/posts.js
const pool = require('../db');

async function createUser(req, res) {
  const { name, email, gender, password } = req.body;

  if (!name || !email || gender || password) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, gender, password) VALUES (?, ?, NOW())',
      [name, email, gender, password]
    );

    return res.status(201).json({
      success: true,
      message: 'User created',
      userId: result.insertId
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Database error' });
  }
}
