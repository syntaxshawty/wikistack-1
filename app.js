const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const wikiRouter = require('./routes/wiki')
const usersRouter = require('./routes/users')

const app = express();
const { db, Page, User } = require('./models');
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use('/wiki', wikiRouter);
//app.use('/user', usersRouter);

app.get('/', (req,res,next) => {
    try {
        res.redirect('/wiki')
        //res.send(layout());
    }
    catch(error) {
        next(error);
    }
});

async function synchronizing() {
  try {
      await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
  }
  catch(error) {
  next(error)
  }
}

synchronizing();

// app.listen(3000);

// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })
