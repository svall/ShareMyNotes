// Models structure attributed to Project 3: https://github.com/svall/citygrow

const db = require('../lib/dbConnect');

// getAllTopics() gets all the topics from the topics table
function getAllTopics(req, res, next) {
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

// getOneTopic() gets one topic from the topics table based on the topic id given
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
    next();
  })
  .catch(error => next(error));
}

// saveNewNote() inserts the new note into the notes table, adds the topic id selected too
function saveNewNote(req, res, next) {
  db.none(`INSERT INTO notes (title, content, topic_id)
    VALUES ($/title/, $/content/, $/topic_id/)
    ;`, req.body)
  .then(() => {
    next();
  })
  .catch(error => next(error));
}

// getOneNote() gets one saved note by id from the notes table
function getOneNote(req, res, next) {
  const noteID = Number.parseInt(req.params.noteID);
  db.one(`
    SELECT *
    FROM notes
    WHERE id = $1
    ;`, noteID)
    .then((note) => {
      res.note = note;
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
