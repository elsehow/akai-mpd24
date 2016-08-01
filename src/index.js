'use strict'

const through = require('through2')

function mpd24 (midiStream) {

  let lastKey;

  function mpd (message, _, next) {
    let [status, key, val] = message
    if (status!= 208) {
      lastKey = key
      this.push([
        key,
        val,
      ])
    }
    if (status == 208) {
      this.push([
        lastKey,
        key,
      ])
    }
    next()
  }

  return midiStream.pipe(through.obj(mpd))
}

module.exports = mpd24
