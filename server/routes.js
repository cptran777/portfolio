// Router for the server using express's abstraction

/******************* INIT DEPENDENCIES *********************/

let path = require('path');

/************************* ROUTES **************************/

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });
}

