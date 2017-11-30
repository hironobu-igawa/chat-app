export class Session {
  login = false;

  constructor() { }

  reset(): Session {
    this.login = false;
    return this;
  }
}
