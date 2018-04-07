import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  private searchMessage = new BehaviorSubject<string>('');
  currentMessage = this.searchMessage.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.searchMessage.next(message);
  }

}
