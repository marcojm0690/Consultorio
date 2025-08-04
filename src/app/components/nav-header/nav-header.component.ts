import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav style="background: #618177; padding: 1rem; color: white; display: flex; justify-content: center;">
      <a routerLink="/" routerLinkActive="active" style="color: white; margin: 0 1rem; text-decoration: none; font-weight: bold;">Inicio</a>
      <a routerLink="/pacientes" routerLinkActive="active" style="color: white; margin: 0 1rem; text-decoration: none; font-weight: bold;">Pacientes</a>
      <a routerLink="/citas" routerLinkActive="active" style="color: white; margin: 0 1rem; text-decoration: none; font-weight: bold;">Citas</a>
      <a routerLink="/configuracion" routerLinkActive="active" style="color: white; margin: 0 1rem; text-decoration: none; font-weight: bold;">Configuración</a>
    </nav>
  `
})
export class NavHeaderComponent {}
