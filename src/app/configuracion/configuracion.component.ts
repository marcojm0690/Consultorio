import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-configuracion',
    template: `<h2>Configuración</h2><p>Configuración del sistema.</p>`,
    standalone: true,
    imports: [RouterModule]
})
export class ConfiguracionComponent {}
