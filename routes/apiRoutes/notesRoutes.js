const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
    let notes;
        notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
        notes = JSON.parse(notes);
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});


module.exports = router;