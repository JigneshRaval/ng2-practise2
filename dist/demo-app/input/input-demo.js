"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let max = 5;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let InputDemo = class InputDemo {
    constructor() {
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new forms_1.FormControl('hello', forms_1.Validators.required);
        this.emailFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(EMAIL_REGEX)]);
        this.model = 'hello';
    }
    addABunch(n) {
        for (let x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    }
};
InputDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'input-demo',
        templateUrl: 'input-demo.html',
        styleUrls: ['input-demo.css'],
    })
], InputDemo);
exports.InputDemo = InputDemo;
