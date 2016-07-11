import {
  Injectable
} from '@angular/core';

import {
  Http,
  Headers,
  Response
} from '@angular/http';

import {Observable} from 'rxjs';

@Injectable()
export class PhraseService {
  static ENDPOINT: string = '/api/phrases/random';

  constructor(private http: Http) {

  }

  getRandom(): Promise<string> {
    return this.http
               .get(PhraseService.ENDPOINT)
               .toPromise()
               .then(this.extractPhrase)
               .catch(this.handleError);
  }

  private extractPhrase(res: Response): String{
    let body = res.json();
    console.log(body);
    return JSON.stringify(body.phrase);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }



}
