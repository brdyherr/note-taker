const path = require('path');
const fs = require('fs');
const notes = require('../db/db.json');


function createNewNote(body, notes) {
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return newNote;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    return true;
}

module.exports = { createNewNote, validateNote }