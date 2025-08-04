import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-pacientes',
    template: `<h2>Pacientes</h2><p>Gestión de pacientes.</p>`,
    standalone: true,
    imports: [RouterModule]
})
export class PacientesComponent {}
