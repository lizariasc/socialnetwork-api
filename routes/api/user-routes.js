const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// Set up GET And POST at /api/users 
router.route('/').get(getAllUsers).post(createUser);

// Set up GET one, PUT and DELETE /api/users/:id 
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST and DELETE a Friend /api/users/:userId/friends/:friendId 
router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend)

// Module export router
module.exports = router; 