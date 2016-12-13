const db = require('../lib/dbConnect');

function getAllTopics(req, res, next) {
  // const cID = Number.parseInt(req.params.cohortID);
  db.any(`
    SELECT *
    FROM topics;
    `)
  .then((topics) => {
    res.topics = topics;
    // console.log('in model topics ===== ', res.topics)
    next();
  })
  .catch(error => next(error));
}

function getOneTopic(req, res, next) {
  const tID = Number.parseInt(req.params.topicID);
    db.any(`SELECT
      notes.title AS Title,
      notes.id AS Note_ID,
      topics.name AS Topic_Name,
      topics.id AS Topic_ID,
      notes.content AS Note,
      notes.student_id AS Student
    FROM topics
    INNER JOIN notes
      ON (topics.id = notes.topic_id)
      WHERE topics.id = $1
    `, tID)
  .then((tdata) => {
    res.topic = tdata;
    // console.log('in model one topic', tdata);
    next();
  })
  .catch(error => next(error));
}


function saveNewNote(req, res, next) {
  // const topic = 2;
  // const content = 'this is the first note';
  db.none(`INSERT INTO notes (title, content, topic_id)
    VALUES ($/title/, $/content/, $/topic_id/)
    ;`, req.body)
  .then(() => {
    // res.newnote = newnote;
    console.log('this is the post ', req.body);
    next();
  })
  .catch(error => next(error));
}

function getOneNote(req, res, next) {
  const noteID = Number.parseInt(req.params.noteID);
  db.one(`
    SELECT *
    FROM notes
    WHERE id = $1
    ;`, noteID)
    .then((note) => {
      res.note = note;
      // console.log('in model notes ===== ', res.note)
      next();
    })
    .catch(error => next(error));
}


module.exports = {
  getAllTopics,
  getOneTopic,
  getOneNote,
  saveNewNote
};
