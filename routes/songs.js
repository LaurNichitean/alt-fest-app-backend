/**
 * Created by laur on 17.10.2015.
 */
var express = require('express');
var router = express.Router();
var cors = require('cors');
var ObjectId = require('mongodb').ObjectID;

/*
 * GET songs.
 */
router.get('/', function (req, res) {
  var db = req.db;
  db.collection('songs').find().toArray(function (err, results) {
    res.json(results);
  });
});
router.get('/:id', function (req, res) {
  var db = req.db;
  db.collection("songs").findOne({'_id': ObjectId(req.params.id)}, function (err, results) {
    res.json(results)
  });
});


/*
 * POST to addSong.
 */
router.post('/', function (req, res) {
  var db = req.db;
  db.collection('songs').insert(req.body, {w: 1}, function (err, result) {
    console.log('result', result.insertedIds);
    res.send(
      (err === null) ? {msg: '', status: 201, insertedIds: result.insertedIds} : {msg: 'Error adding song: ' + err}
    )
  })
});

/*
 * PUT to modifySong.
 */
router.put('/:id', cors(), function (req, res) {
  var db = req.db;
  db.collection('songs').update({'_id': ObjectId(req.params.id)},
    {$set: req.body},
    function (err, result) {
      res.send(
        (err === null) ? {msg: '', status: 200} : {msg: 'Error updating song: ' + err}
      )
    })
});

/*
 * DELETE to deleteSong.
 */
router.delete('/:id', function (req, res) {
  var db = req.db;
  db.collection('songs').remove({'_id': ObjectId(req.params.id)},
    function (err, result) {
      res.send(
        (err === null) ? {msg: '', status: 200} : {msg: 'Error deleting song: ' + err}
      )
    })
});

module.exports = router;
