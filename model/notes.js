const db = require('../lib/dbConnect');

function getAllTopics(req, res, next) {
  db.any('SELECT * FROM topics;')
  .then((topics) => {
    res.topics = topics;
    next();
  })
  .catch(error => next(error));
}

function getOneTopic(req, res, next) {
  const tID = Number.parseInt(req.params.topicID);
    db.any(`SELECT
      notes.title AS Title,
      topics.name AS Topic_Name,
      topics.id AS Topic_ID,
      notes.student_id AS Student
    FROM topics
    INNER JOIN notes
      ON (topics.id = notes.topic_id)
      WHERE topics.id = $1
    `, tID)
  .then((tdata) => {
    res.topic = tdata;
    console.log('in model one topic', tdata);
    next();
  })
  .catch(error => next(error));
}



module.exports = {
  getAllTopics,
  getOneTopic,
};
