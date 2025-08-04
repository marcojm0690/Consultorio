import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check if user exists in localStorage on initialization
    const user = localStorage.getItem('user');
    this.isAuthenticatedSubject.next(!!user);
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticatedSubject.next(value);
  }
}
