import React, { useState, useEffect } from 'react';
import Soundfont from 'soundfont-player';
import { JZZ } from 'jzz';
import player from 'jzz-gui-player';
import 'jzz-midi-smf';

const MidiPlayerComponent2 = () => {
  const [player, setPlayer] = useState(null);
  const [instrument, setInstrument] = useState(null);

  useEffect(() => {
    const initializePlayer = async () => {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const instrument = await Soundfont.instrument(
        ac,
        'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/MusyngKite/acoustic_guitar_nylon-mp3.js'
      );
      setInstrument(instrument);

      const newPlayer = JZZ().openMidiOut();
      setPlayer(newPlayer);
    };

    initializePlayer();
  }, []);

  const loadFile = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const midiData = await readFileAsArrayBuffer(file);
        const smf = new JZZ.MIDI.SMF(midiData);
        playMidiFile(smf);
      } catch (error) {
        console.error('Error loading MIDI file:', error);
      }
    }
  };

  const readFileAsArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const playMidiFile = (smf) => {
    if (player) {
      player.close();
      player.load(smf);
      player.play();
    }
  };

  const play = () => {
    if (player) {
      player.play();
    }
  };

  const pause = () => {
    if (player) {
      player.stop();
    }
  };

  const stop = () => {
    if (player) {
      player.stop();
    }
  };

  return (
    <div>
      <input type="file" onChange={loadFile} />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default MidiPlayerComponent2;
