import mongoose from 'mongoose'
import Promise from 'bluebird'
import phraseSchema from '../model/phrase-model'
import _ from 'lodash'

phraseSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    var _query = {};

    Phrase
    .find(_query)
    .exec((err, phrases) => {
      err ? reject(err)
      : resolve(phrases);
    });
  });
}

phraseSchema.statics.getCount = () => {
  return new Promise((resolve, reject) => {
    Phrase
    .count()
    .exec((err, count) => {
      err ? reject(err)
      : resolve(count);
    });
  });
}

phraseSchema.statics.get = (index) => {

  return new Promise((resolve, reject) => {
    console.log('querying with index '+index);
    Phrase
    .find({})
    .skip(index)
    .limit(1)
    .exec((err, phrases) => {
      err ? reject(err)
      : resolve(phrases[0]);
    });

  });
}

var Phrase = mongoose.model('Phrase', phraseSchema);

export default Phrase;
