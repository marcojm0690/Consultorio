import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-citas',
    template: `<h2>Citas</h2><p>Gestión de citas.</p>`,
    standalone: true,
    imports: [RouterModule]
})
export class CitasComponent {}
