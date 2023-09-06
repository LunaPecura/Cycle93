
const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// create new post
router.post('/', postsCtrl.create);

// get all posts
router.get('/', postsCtrl.getAll);

// delete post
router.delete('/:id', postsCtrl.remove);

// // POST /api/users/login
// router.post('/login', usersCtrl.login);

// // GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
