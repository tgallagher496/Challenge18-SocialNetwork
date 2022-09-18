const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId Put
router.route('/:userId').put(updateUser);

//  /api/users/:userId Delete
router.route('/:userId').delete(deleteUser);

module.exports = router;