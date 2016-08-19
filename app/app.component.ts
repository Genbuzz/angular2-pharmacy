/**
 * This component works like main 
 */

import { Component } from '@angular/core';
import { MedicinesComponent } from './medicines/medicines.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [MedicinesComponent]
})
export class AppComponent { 
    // We need to create 'name' property
    name = "Medicinas";
}