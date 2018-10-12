const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const router = require('./routes.js');

app.use('/loaderio-0366811c6f31a5054a5438605765f838.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'loaderio-0366811c6f31a5054a5438605765f838.txt'), (err) => {
    if (err) {              
      throw(err);
    }else {
      console.log('sent');                
    }        
  });
});

app.use(bodyParser.json());
app.use(compression());

app.use('/:id', express.static('public'));

app.set('port', process.env.PORT || 8080);

app.get('/api/header/:id/res', proxy('http://18.224.184.108'));

// app.use('/api', router);

app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});