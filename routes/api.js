const express = require('express');
const router = express.Router();

const { getAllTopics, getOneTopic } = require('../model/notes')


// get all notes for one topic
router.get('/:topicID', getOneTopic, (req, res) => {
  res.json(res.topic || []);
  // console.log('in routes for topic id ', res.topic);
});


// route for /api/cohort
// get all topics for the cohort
router.get('/', getAllTopics, (req, res) => {
  res.json(res.topics || []);
  // console.log(res.topics);
});



module.exports = router;
