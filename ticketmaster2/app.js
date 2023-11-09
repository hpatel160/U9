const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const individualRoutes = require('./routes/individualRoutes')
const bodyParser = require('body-parser');


//express app
const app = express();

//connect to db
const dbURI = 'mongodb+srv://user123:test123@cluster0.vdq1gti.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
    res.redirect('/appointments');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


//routes
app.use('/appointments', routes);
app.use('/individual', individualRoutes);


//404
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});