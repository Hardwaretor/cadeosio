
import {Injectable} from '@angular/core';
import * as Eos from 'eosjs';
import {LocalStorage} from 'ngx-webstorage';
import {environment} from '../../environments/environment';

@Injectable()
export class ScatterService {
  @LocalStorage()
  identity: any;
  eos: any;
  scatter: any;
  network: any;

  load() {
    console.log(this.identity);
    this.scatter = (<any>window).scatter;
    if (this.identity) {
      this.scatter.useIdentity(this.identity.hash);
    }

  }
}