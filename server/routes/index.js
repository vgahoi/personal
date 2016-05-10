var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var details = require('./details.js');
var user = require('./users.js');
var posts = require('./posts.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
router.get('/post', posts.getAll);
router.get('/post/:id', posts.getOne);
router.post('/post/', posts.create);
router.put('/post/:id', posts.update);
router.delete('/post/:id', posts.delete);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/details', details.getAll);
router.get('/api/v1/details/:id', details.getOne);
router.post('/api/v1/details/', details.create);
router.put('/api/v1/details/:id', details.update);
router.delete('/api/v1/details/:id', details.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);


module.exports = router;
