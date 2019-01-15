const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
  },

  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
    },
  ],

  name: {
    type: String,
  },

  track_number: {
    type: String,
  },

  disk_number: {
    type: String,
  },

  duration_in_seconds: {
    type: Number,
  },

  type: {
    type: String,
    default: 'track',
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;