// IMPORTS/REQUIRES
// ~~~~~~~~~~~~~
const express = require('express'),
      bodyParser = require('body-parser');
      bc = require('./controllers/books_controller')


// VARIABLES
// ~~~~~~~~~~~~~
const port = 3000,
      app = express();


// TOP-LEVEL MIDDLEWARE
// ~~~~~~~~~~~~~
app.use(bodyParser.json())
app.use(express.static(__dirname+'/..public/build'))

// ENDPOINTS
// ~~~~~~~~~~~~~
app.get('/api/books',bc.read )
app.put('/api/books/:id',bc.update )
app.post('/api/books',bc.create )
app.delete('/api/books/:id',bc.delete )

// LISTEN
// ~~~~~~~~~~~~~
app.listen(port,()=>console.log(`ITS OVER ${port}`))

