var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blues' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Blues' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Blues' });
});

router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Blues' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Blues' });
});


module.exports = router;
