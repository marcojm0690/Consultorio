import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MockLoginService } from '../services/mock-login.service';
import { AuthStateService } from '../services/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule]
})
export class LoginComponent {
  email = '';
  error = '';

  constructor(
    private loginService: MockLoginService,
    private router: Router,
    private authState: AuthStateService
  ) {}

  login() {
    const user = this.loginService.login(this.email);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.authState.setAuthenticated(true);
      this.router.navigate(['/']);
    } else {
      this.error = 'Usuario no encontrado';
    }
  }
}
