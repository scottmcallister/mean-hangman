import PhraseDAO from '../dao/phrase-dao'

export default class PhraseController {
  static getAll(req, res) {
    PhraseDAO
      .getAll()
      .then(phrases => res.status(200).json(phrases))
      .catch(error => res.status(400).json(error));
  }

  static getCount(req, res) {
    PhraseDAO
      .getCount()
      .then(count => res.status(200).json(count))
      .catch(error => res.status(400).json(error));
  }

  static getRandom(req, res) {
    PhraseDAO
      .getCount()
      .then(count => {
        console.log('got count: '+count);
        let randomNumber = Math.floor(Math.random() * count);
        console.log('random number: '+randomNumber);
        return PhraseDAO.get(randomNumber);
      })
      .then(phrase => res.status(200).json(phrase))
      .catch(error => {
        console.log(error);
        res.status(400).json(error)
      });
  }
}
