/**
 * We are gonna create a list of medicines, so
 * we need to create a component first.
 * 
 */

import { Component, OnInit } from '@angular/core';

import { Medicine } from './medicine.model';

@Component({
    moduleId: module.id,
    selector: 'my-medicines',
    templateUrl: '../partials/medicines.component.html',
    styleUrls: ['../css/medicines.component.css']
})
export class MedicinesComponent implements OnInit {
    medicines: Medicine[];     
    
    constructor() { }

    ngOnInit() {
        // List of medicines
        this.medicines = [
            { 'id': 11, 'name': 'Aspirina' },
            { 'id': 12, 'name': 'Ibuprofeno' },
            { 'id': 13, 'name': 'Diazepan' },
            { 'id': 14, 'name': 'Clamoxil' },
            { 'id': 15, 'name': 'Lexatin' }
        ];
     }
}