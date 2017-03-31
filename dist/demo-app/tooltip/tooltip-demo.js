"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let TooltipDemo = class TooltipDemo {
    constructor() {
        this.position = 'below';
        this.message = 'Here is the tooltip';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 1000;
    }
};
TooltipDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tooltip-demo',
        templateUrl: 'tooltip-demo.html',
        styleUrls: ['tooltip-demo.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush // make sure tooltip also works OnPush
    })
], TooltipDemo);
exports.TooltipDemo = TooltipDemo;