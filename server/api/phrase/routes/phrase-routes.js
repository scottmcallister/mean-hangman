import PhraseController from '../controller/phrase-controller'

export default class PhraseRoutes {
  static init(router){
    router
    .route('/api/phrases')
    .get(PhraseController.getAll);

    router
    .route('/api/phrases/count')
    .get(PhraseController.getCount);

    router
    .route('/api/phrases/random')
    .get(PhraseController.getRandom);
  }
}
