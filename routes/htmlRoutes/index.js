const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');





module.exports = router;
