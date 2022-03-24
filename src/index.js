const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/pokemon'));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});