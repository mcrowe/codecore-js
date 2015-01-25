// parseNote
//
// Accepts a note string (e.g. "C#*2")
// Returns a note object (e.g. {pitch: "C#", beats: 2}).
// If a number of beats is not present, then it defaults to 1.
//
var parseNote = function(string) {
  var parts = string.split('*');
  var pitch = parts[0];
  var beats;

  if (typeof parts[1] === "undefined") {
    beats = 4;
  } else {
    beats = parseInt(parts[1]);
  }

  return {
    pitch: pitch,
    beats: beats
  };
};


// parseSong
//
// Accepts a song string (e.g. "A*1 C#*2 D*4")
// Returns an array of note objects.
//
var parseSong = function(string) {
  var noteStrings = string.split(' ');
  var notes = [];

  for (var i=0; i < noteStrings.length; i++) {
    notes.push( parseNote(noteStrings[i]) );
  }

  return notes;
};