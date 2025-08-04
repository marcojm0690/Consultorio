import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class MockLoginService {
  private users: Array<User & { clave: string }> = [
    { id: 1, name: 'Marco Jimenez', email: 'marco@uhispano.ac.cr', role: 'doctor', clave: 'doctor123' },
    { id: 1, name: 'JeanCarlo', email: 'jeancarlo@uhispano.ac.cr', role: 'doctor', clave: 'doctor123' },
    { id: 1, name: 'Gabriel', email: 'gabriel@uhispano.ac.cr', role: 'doctor', clave: 'doctor123' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'patient', clave: 'paciente123' },
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin', clave: 'admin123' }
  ];

  login(email: string, clave: string): User | null {
    const user = this.users.find(u => u.email === email && u.clave === clave);
    if (!user) return null;
    const { clave: _, ...userData } = user;
    return userData as User;
  }

  getUsers(): User[] {
    return this.users;
  }
}
