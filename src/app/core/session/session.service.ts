import { Injectable } from '@angular/core';
import { Session } from './session';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
  readonly session = new Session();
  readonly sessionState: Observable<Session>;
  protected readonly sessionSubject: Subject<Session>;

  constructor(protected router: Router) {
    this.sessionSubject = new Subject<Session>();
    this.sessionState = this.sessionSubject.asObservable();
  }

  login(): void {
    this.session.login = true;
    this.sessionSubject.next(this.session);
    this.router.navigate(['/']);
  }

  logout(): void {
    this.sessionSubject.next(this.session.reset());
    this.router.navigate(['/account/login']);
  }
}
