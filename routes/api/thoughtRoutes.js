const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThoughts,
  deleteThought,
  //addReaction,
  //deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:userId Post
router.route('/:thoughtId').post(createThought);

//  /api/thoughts/:userId Delete
router.route('/:thoughtId').delete(deleteThought);

// /api/user/:userID/friends/:friendId
router.route('/:thoughtId').put(updateThoughts);

// /api/user/:userID/friends/:friendId
router.route('/:thoughtId').delete(deleteThought);

//  add reaction
//router.route('/:thoughtID/reations').put(addReaction);

// delete reaction
//router.route('/:thoughtID/reations').delete(deleteReaction);

module.exports = router;