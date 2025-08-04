import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class MockLoginService {
  private users: User[] = [
    { id: 1, name: 'Marco Jimenez', email: 'marco.jimenezs@uhispano.ac.cr', role: 'doctor' },
    { id: 1, name: 'JeanCarlo', email: 'jeancarlo@uhispano.ac.cr', role: 'doctor' },
    { id: 1, name: 'Gabriel', email: 'gabriel@uhispano.ac.cr', role: 'doctor' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'patient' },
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' }
  ];

  login(email: string): User | null {
    return this.users.find(u => u.email === email) || null;
  }

  getUsers(): User[] {
    return this.users;
  }
}
