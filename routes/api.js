const express = require('express');
const router = express.Router();

const { getAllTopics, getOneTopic, saveNewNote } = require('../model/notes')


// get all notes for one topic
router.get('/:topicID', getOneTopic, (req, res) => {
  res.json(res.topic || []);
  // console.log('in routes for topic id ', res.topic);
});

router.post('/newnote', saveNewNote, (req, res) => {
  res.json(res.note || []);
  // console.log('new note is ', res.note);
})

// route for /api/cohort
// get all topics for the cohort
router.get('/', getAllTopics, (req, res) => {
  res.json(res.topics || []);
  // console.log(res.topics);
});



module.exports = router;
