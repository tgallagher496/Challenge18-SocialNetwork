const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/users').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/users/:userId').get(getSingleUser);

// /api/users/:userId Put
router.route('/users/:userId').put(updateUser);

//  /api/users/:userId Delete
router.route('/user/:userId').delete(deleteUser);

// /api/user/:userID/friends/:friendId
router.route('/users/:userId/friends/:friendId').post(addFriend)

// /api/user/:userID/friends/:friendId
router.route('/users/:userId/friends/:friendId').delete(deleteFriend)

module.exports = router;