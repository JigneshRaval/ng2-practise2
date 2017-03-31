"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// TODO(josephperrott): Add an automatically filling example progress bar.
let ProgressBarDemo = class ProgressBarDemo {
    // TODO(josephperrott): Add an automatically filling example progress bar.
    constructor() {
        this.color = 'primary';
        this.determinateProgressValue = 30;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
    }
    stepDeterminateProgressVal(val) {
        this.determinateProgressValue = this.clampValue(val + this.determinateProgressValue);
    }
    stepBufferProgressVal(val) {
        this.bufferProgressValue = this.clampValue(val + this.bufferProgressValue);
    }
    stepBufferBufferVal(val) {
        this.bufferBufferValue = this.clampValue(val + this.bufferBufferValue);
    }
    clampValue(value) {
        return Math.max(0, Math.min(100, value));
    }
};
ProgressBarDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'progress-bar-demo',
        templateUrl: 'progress-bar-demo.html',
        styleUrls: ['progress-bar-demo.css'],
    })
], ProgressBarDemo);
exports.ProgressBarDemo = ProgressBarDemo;