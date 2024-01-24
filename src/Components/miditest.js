import React, { useState, useEffect } from 'react';
import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';
import song from './MIDI-Files/Wii Channels - Mii Channel.mid';

const MidiPlayerComponent = () => {
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

      const newPlayer = new MidiPlayer.Player((event) => {
        if (event.name === 'Note on' && event.velocity > 0) {
          instrument.play(event.noteName, ac.currentTime, { gain: event.velocity / 100 });
        }
        // Handle other MIDI events as needed
      });

      setPlayer(newPlayer);
    };

    initializePlayer();
  }, []);

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (fileEvent) => {
        const dataUri = fileEvent.target.result;
        loadDataUri(dataUri);
      };
      reader.readAsDataURL(file);
    }
  };

  const loadDataUri = (dataUri) => {
    if (player) {
      player.stop();
      player.loadDataUri(dataUri);
    }
  };

  const play = () => {
    if (player) {
      player.play();
    }
  };

  const pause = () => {
    if (player) {
      player.pause();
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

export default MidiPlayerComponent;
