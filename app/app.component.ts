import { Component } from '@angular/core';

import { MedicinesComponent } from './medicines/medicines.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{name}}</h1>
    <my-medicines></my-medicines>
    `,
    directives: [MedicinesComponent]
})
export class AppComponent { 
    // We need to create 'name' property
    name = "Nombre de la medicina";
}