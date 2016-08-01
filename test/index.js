var ud = require('ud');
var MidiStream = require('midi-stream')
var mpd24 = require('..')

// view logic

var setup = ud.defn(module, function () {

  MidiStream.getPortNames(function (err, res) {
    console.log(err, res)
    var duplex = MidiStream(res[0], 0)
    //mpd24(duplex)
    duplex
      .on('data', d => {
        console.log(d)
        //document.body.innerHTML =
        //  `${JSON.stringify(d)}\n`
      })

    mpd24(duplex)
      .on('data', d => {
        console.log('parsed', d)
      })
  })

})

setup()
