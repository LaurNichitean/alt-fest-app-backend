var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

/*
 * GET artists.
 */
router.get('/', function (req, res) {
  var db = req.db;
  db.collection('artists').find().toArray(function (err, results) {
    res.json(results);
  });
});
router.get('/:id', function (req, res) {
  var db = req.db;
  db.collection("artists").findOne({'_id': ObjectId(req.params.id)}, function (err, results) {
    res.json(results)
  });
});


/*
 * POST to addArtist.
 */
router.post('/', function (req, res) {
  var db = req.db;
  db.collection('artists').insert(req.body, function (err, result) {
    res.send(
      (err === null) ? {msg: '', status: 200, insertedIds: result.ops.insertedIds} : {msg: 'Error adding artist: ' + err}
    )
  })
});

/*
 * PUT to modifyArtist.
 */
router.put('/:id', function (req, res) {
  var db = req.db;
  db.collection('artists').updateOne({'_id': ObjectId(req.params.id)},
    {$set: req.body},
    function (err, result) {
      res.send(
        (err === null) ? {msg: '', status: 200} : {msg: 'Error updating artist: ' + err}
      )
    })
});

/*
 * DELETE to deleteArtist.
 */
router.delete('/:id', function (req, res) {
  var db = req.db;
  db.collection('artists').deleteOne({'_id': ObjectId(req.params.id)},
    function (err, result) {
      res.send(
        (err === null) ? {msg: '', status: 200} : {msg: 'Error deleting artist: ' + err}
      )
    })
});

/*
 * Combined request
 */

router.get('/:artistId/songs', function (req, res) {
  var db = req.db;
  console.dir(req.params);
  db.collection('songs').find({'artistId': req.params.artistId}).toArray(function (err, results) {
    res.json(results)
  });
});

module.exports = router;
