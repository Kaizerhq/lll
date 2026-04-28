const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images if you have any)
app.use(express.static(__dirname));

// Important: Serve your main HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-panel.html'));
});

app.get('/website.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'website.html'));
});

app.get('/admin-panel.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-panel.html'));
});

// Catch-all route - return 404 for unknown paths
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;