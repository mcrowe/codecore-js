var MIDDLE_OCTAVE = 4;
var MIDDLE_A_FREQUENCY = 440.0;

var PITCH_RATIOS = {
  "A"  : 1.0,
  "A#" : 16.0 / 15.0,
  "B"  : 9.0 / 8.0,
  "C"  : 6.0 / 5.0,
  "C#" : 5.0 / 4.0,
  "D"  : 4.0 / 3.0,
  "D#" : 45.0 / 32.0,
  "E"  : 3.0 / 2.0,
  "F"  : 8.0 / 5.0,
  "F#" : 5.0 / 3.0,
  "G"  : 9.0 / 5.0,
  "G#" : 15.0 / 8.0
};

var ENHARMONIC_EQUIVALENTS = {
  "A"   : "A",
  "G##" : "A",
  "Bbb" : "A",

  "A#"  : "A#",
  "Bb"  : "A#",
  "Cbb" : "A#",

  "B"   : "B",
  "A##" : "B",
  "Cb"  : "B",

  "C"   : "C",
  "B#"  : "C",
  "Dbb" : "C",

  "C#"  : "C#",
  "B##" : "C#",
  "Db"  : "C#",

  "D"   : "D",
  "C##" : "D",
  "Ebb" : "D",

  "D#"  : "D#",
  "Eb"  : "D#",
  "Fbb" : "D#",

  "E"   : "E",
  "D##" : "E",
  "Fb"  : "E",

  "F"   : "F",
  "E#"  : "F",
  "Gbb" : "F",

  "F#"  : "F#",
  "E##" : "F#",
  "Gb"  : "F#",

  "G"   : "G",
  "F##" : "G",
  "Abb" : "G",

  "G#"  : "G#",
  "Ab"  : "G#"
};

var SECONDS_PER_MINUTE = 60;
var MILLIS_PER_SECOND = 1000;
var CUTOFF_FREQUENCY = 2000;
var RESONANCE_FREQUENCY = 0;
var WAVEFORM = 'triangle';

var NUM_HARMONICS = 50;

// Returns the frequency in hz for a given pitch.
// e.g. 'A' => 440
var pitchFrequency = function(pitch) {
  var normalizedPitch =  ENHARMONIC_EQUIVALENTS[pitch];
  return MIDDLE_A_FREQUENCY * PITCH_RATIOS[normalizedPitch];
};

// Play a tone with the given frequency in hz and duration in seconds,
// to the given audio context.
var playTone = function(frequency, duration, audioContext) {
  startTime = audioContext.currentTime;


  // Setup oscillators for first 10 harmonics.
  var harms = [];

  for (var i=1; i <= NUM_HARMONICS; i++) {
    var osc = audioContext.createOscillator();
    osc.type = WAVEFORM;
    osc.frequency.value = i * frequency;

    var gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.0, startTime);
    gain.gain.linearRampToValueAtTime(10/i, startTime + 0.01);
    gain.gain.linearRampToValueAtTime(0, startTime + duration * 0.75);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    // Start the oscillators.
    osc.start(startTime);

    // Stop the oscillators when we're done.
    osc.stop(startTime + duration);

    harms.push(osc);
  }

};

// Setup a single shared audio context for the juke box.
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var jukeboxAudioContext = new AudioContext();

// Play a given song at "bpm" beats per minute.
// Calls "onComplete" when the song is over.
//
// A song should be an array of notes, each containing a pitch and
// number of beats, e.g:
// [{pitch: 'A', beats: 1}, {pitch: 'B#', beats: 2}, ...]
var playSong = function(song, bpm, onComplete) {

  if (typeof onComplete == "undefined") {
    onComplete = function(){};
  }

  var currNote = 0;

  var bps = bpm / SECONDS_PER_MINUTE;

  var playNextNote = function() {
    var note = song[currNote];
    var duration = note.beats / bps;
    var frequency = pitchFrequency(note.pitch);

    playTone(frequency, duration, jukeboxAudioContext);

    currNote++;

    setTimeout(function() {
      if (currNote < song.length) {
        playNextNote();
      } else {
        onComplete();
      }
    }, duration * MILLIS_PER_SECOND);
  };

  playNextNote();

};


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