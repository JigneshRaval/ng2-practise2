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
const material_1 = require("@angular/material");
let PortalDemo = class PortalDemo {
    get programmingJoke() {
        return this.templatePortals.first;
    }
    get mathJoke() {
        return this.templatePortals.last;
    }
    get scienceJoke() {
        return new material_1.ComponentPortal(ScienceJoke);
    }
};
__decorate([
    core_1.ViewChildren(material_1.TemplatePortalDirective),
    __metadata("design:type", core_1.QueryList)
], PortalDemo.prototype, "templatePortals", void 0);
PortalDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'portal-demo',
        templateUrl: 'portal-demo.html',
        styleUrls: ['portal-demo.css'],
    })
], PortalDemo);
exports.PortalDemo = PortalDemo;
let ScienceJoke = class ScienceJoke {
};
ScienceJoke = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'science-joke',
        template: `<p> 100 kilopascals go into a bar. </p>`
    })
], ScienceJoke);
exports.ScienceJoke = ScienceJoke;
