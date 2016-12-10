const express = require('express');
const router = express.Router();

const { getAllTopics } = require('../model/notes')


// get all notes for one topic
// router.get('/:gardenID', getOneGarden, (req, res) => {
//   res.json(res.garden || []);
//   // res.rows = res.garden
//   // console.log('in routes for garden id ', res.garden);
// });


// route for /api/cohort
// get all topics for the cohort
router.get('/', getAllTopics, (req, res) => {
  res.json(res.topics || []);
  console.log(res.topics);
});



module.exports = router;
