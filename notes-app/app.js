const c = require("chalk");
const y = require("yargs");
const notes = require("./notes");

// Add Command
y.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ body, title }) => {
    notes.addNotes(title, body);
  }
});

// Remove Command
y.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.removeNotes(argv.title)
});

// List Command
y.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    notes.listNotes();
  }
});

// Read Command
y.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.readNotes(argv.title)
});

y.parse();
