const db = require('../lib/dbConnect');

function getAllTopics(req, res, next) {
  db.any('SELECT * FROM topics;')
  .then((topics) => {
    res.topics = topics;
    next();
  })
  .catch(error => next(error));
}




module.exports = {
  getAllTopics,

};
