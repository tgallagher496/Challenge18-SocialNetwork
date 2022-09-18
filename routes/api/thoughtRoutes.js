const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/userController');

// /api/thoughts
router.route('/thoughts').get(getThoughts);

// /api/thoughts
router.route('/thoughts/:userId').get(getSingleThought);

// /api/thoughts/:userId Post
router.route('/thoughts/:userId').post(createThought);

//  /api/thoughts/:userId Delete
router.route('/thoughts/:userId').delete(deleteThought);

// /api/user/:userID/friends/:friendId
router.route('/thoughts/:userId').put(updateThought);

// /api/user/:userID/friends/:friendId
router.route('/thoughts/:userId').delete(deleteThought);

//  add reaction
router.route('/thoughts/:thoughtID/reations').put(addReaction);

// delete reaction
router.route('/thoughts/:thoughtID/reations').delete(deleteReaction);

module.exports = router;