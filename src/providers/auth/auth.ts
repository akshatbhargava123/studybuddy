import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {

  static TOKEN_KEY = 'token';

  constructor(
    private storage: Storage
  ) { }

  setToken(value: string) {
    return this.storage.set(AuthProvider.TOKEN_KEY, value);
  }

  getToken() {
    return this.storage.get(AuthProvider.TOKEN_KEY);
  }

  googleLogin() {

  }

}
