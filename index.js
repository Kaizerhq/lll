const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-panel.html'));
});

// Serve .html files directly
app.get('/:filename', (req, res) => {
  const filename = req.params.filename;
  if (filename.endsWith('.html')) {
    res.sendFile(path.join(__dirname, filename));
  } else {
    res.sendFile(path.join(__dirname, 'website.html'));
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Олдсонгүй</h1>
    <p>Хуудас олдсонгүй.</p>
    <a href="/">Нүүр хуудас руу буцах</a>
  `);
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;