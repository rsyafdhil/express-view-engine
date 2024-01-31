const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Pakai EJS
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
  const siswa = [
    {
      nama: 'Fulan',
      email: 'fulangaming@gmail.com'
    },
  ];

  res.render('index', {
    layout: 'partials/layout',
    title: 'Home',
    siswa
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'partials/layout',
    title: 'About'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'partials/layout',
    title: 'Contact'
  });
});

app.use((req, res) => {
  res.status(404);
  res.send('404 Not found. Anjay');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
