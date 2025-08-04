import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { AuthStateService } from './services/auth-state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterModule, NavHeaderComponent, CommonModule]
})
export class AppComponent {
  constructor(public authState: AuthStateService) {}
  title = 'my-app';
}
