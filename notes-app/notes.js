const fs = require("fs");
const c = require("chalk");

const getNotes = function() {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const isDuplicate = notes.find(note => note.title === title);

  if (!isDuplicate) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log("new Note");
  } else {
    console.log("No note taken, duplicate title");
  }
};

const removeNotes = title => {
  const notes = loadNotes();
  const isNote = notes.some(note => note.title === title);
  if (isNote) {
    const newNotes = notes.filter(note => note.title !== title);
    saveNotes(newNotes);
    console.log(c.green.inverse(`Note with title '${title}' removed.`));
  } else {
    console.log(
      c.red.inverse(`No note with this title, did you really mean '${title}'?`)
    );
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(`-> ${c.bold.bgGray(note.title)}`);
    console.log(note.body);
  });
};

const readNotes = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  debugger;

  if (noteToRead) {
    console.log(`-> ${c.bold.bgGray(noteToRead.title)}`);
    console.log(noteToRead.body);
  } else {
    console.log(c.red.inverse("No note found!"));
  }
};

// Read the notes.json file, read and parse back to JS Object
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

// Receives modified notes, which has a newly added note and rewrites the notes.json file
const saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

module.exports = {
  addNotes,
  getNotes,
  removeNotes,
  listNotes,
  readNotes
};
