// Routes structure attributed to Project 3: https://github.com/svall/citygrow
const express = require('express');
const router = express.Router();
const { getAllTopics, getOneTopic, saveNewNote, getOneNote } = require('../model/notes')

// routes for /api/cohort:
// get all notes for one topic
router.get('/:topicID', getOneTopic, (req, res) => {
  res.json(res.topic || []);
});

router.get('/notes/:noteID', getOneNote, (req, res) => {
  res.json(res.note || []);
});

router.post('/newnote', saveNewNote, (req, res) => {
  res.json(res.note || []);
})

router.get('/', getAllTopics, (req, res) => {
  res.json(res.topics || []);
});

module.exports = router;
