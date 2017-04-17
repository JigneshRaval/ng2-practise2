"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ChildComponent1 = class ChildComponent1 {
    constructor() {
        this.email = "Type your email address.";
        this.emailRegister = new core_1.EventEmitter();
    }
    consturctor() {
    }
    registerEmail(emailAdd) {
        console.log('Email Address resgister properly...');
        if (emailAdd.value == '') {
            alert('Put your email address first..');
            return;
        }
        else {
            this.emailRegister.emit(emailAdd.value);
        }
    }
};
__decorate([
    core_1.Input('placeholder'),
    __metadata("design:type", String)
], ChildComponent1.prototype, "email", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent1.prototype, "emailRegister", void 0);
ChildComponent1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'child-component1',
        template: `
        <input placeholder="{{emai}}" #emailbox/>
        <button class="red" (click)="registerEmail(emailbox)">Register</button>
    `
    })
], ChildComponent1);
exports.ChildComponent1 = ChildComponent1;
