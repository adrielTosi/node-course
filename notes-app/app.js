const c = require("chalk");
const y = require("yargs");

// Add Command
y.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title"
    }
  },
  handler: argv => console.log("Add Note done!", argv)
});

// Remove Command
y.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => console.log("Remove note!")
});

// List Command
y.command({
  command: "list",
  describe: "List all notes",
  handler: () => console.log("List all notes")
});

// Read Command
y.command({
  command: "read",
  describe: "read a note",
  handler: () => console.log("Read notes")
});

y.parse();
