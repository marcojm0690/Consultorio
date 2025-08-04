import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-inicio',
    template: `<h2>Inicio</h2><p>Bienvenido al consultorio.</p>`,
    standalone: true,
    imports: [RouterModule]
})
export class InicioComponent {}
