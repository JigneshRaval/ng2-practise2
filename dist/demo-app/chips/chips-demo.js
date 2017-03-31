"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ChipsDemo = class ChipsDemo {
    constructor() {
        this.visible = true;
        this.color = '';
        this.people = [
            { name: 'Kara' },
            { name: 'Jeremy' },
            { name: 'Topher' },
            { name: 'Elad' },
            { name: 'Kristiyan' },
            { name: 'Paul' }
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    alert(message) {
        alert(message);
    }
    add(input) {
        if (input.value && input.value.trim() != '') {
            this.people.push({ name: input.value.trim() });
            input.value = '';
        }
    }
    toggleVisible() {
        this.visible = false;
    }
};
ChipsDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chips-demo',
        templateUrl: 'chips-demo.html',
        styleUrls: ['chips-demo.css']
    })
], ChipsDemo);
exports.ChipsDemo = ChipsDemo;
