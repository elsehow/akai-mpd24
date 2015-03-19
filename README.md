# akai-mpd24

a stream-based, node- and browser-friendly driver for the akai [mpd24](http://www.akaipro.com/product/mpd241).

the mpd24 is a true classic imo - 16 pressure-sensitive pads + 8 dials and 8 faders.

## example

```
var MidiStream = require('midi-stream')
var mpd24 = require('akai-mpd24')

MidiStream.getPortNames(function (err, res) {
  console.log('found midi ports', err, res)
  var duplex = MidiStream(res[0], 0)
  mpd24(duplex)
    .on('data', d => {
      console.log('parsed', d)
    })
})
```

## install

    npm install akai-mpd24
    
## api

### require('akai-mpd24')(midiStream)

returns an [object stream](https://nodejs.org/api/stream.html#stream_object_mode) of vaules

```
[key, data]
```

(the mpd24 displays the key code of buttons on the LED as you press them)

no MIDI codes in this API! who needs 'em?

## license

BSD
