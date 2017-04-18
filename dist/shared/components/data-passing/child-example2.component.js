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
// Example 2 : Data passing between components
//================================================================
const core_1 = require("@angular/core");
// Child Component
//================================================================
let RioCounterComponent2 = class RioCounterComponent2 {
    // Child Component
    //================================================================
    constructor() {
        this.result = new core_1.EventEmitter(); // We are passing data to Parent Component
    }
    increment() {
        this.count++;
        this.result.emit(this.count);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RioCounterComponent2.prototype, "count", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RioCounterComponent2.prototype, "userName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RioCounterComponent2.prototype, "result", void 0);
RioCounterComponent2 = __decorate([
    core_1.Component({
        selector: 'rio-counter2',
        template: `
        <div style="border: 1px solid #f3c0c0; background: #fbecec; padding: 1em;">
            <h2>Child Component 1</h2>
            <h3>1. Pass data from the parent component to the child component via @Input</h3>
            <p>Count : {{count}} <em>(Passed from Parent Component)</em></p>
            <p>User Name : {{userName}}. <em>(Passed from Parent Component)</em></p>
            <button (click)="increment()">Increment Count</button>
        </div>
    `
    })
], RioCounterComponent2);
exports.RioCounterComponent2 = RioCounterComponent2;
/**
 * How data is passing between Parent <-> Child components
 * ----------------------------------------------------------------------------------------------------------
 * 1. Child Component will be injected into Parent Component. See below given code from Parent component
 *      <div style="border: 1px solid #CCC; background: #EEE; padding: 1em;">
            <p>Parent Number: {{num}}</p>
            <p>Parent Count: {{parentCount}}</p>
            <rio-counter [count]="num" (result)="childOutputIncrement($event)" [userName]="myUserName"></rio-counter>
        </div>
 * 2. From Parent component we will pass intial value which is {{num}} in variable named "count" like : [count]="num"
 * 3. From child component we will pass one click event and will use it in Parent component like.   : (result)="childOutputIncrement($event)"
 * 4. In Child component, when we click "Increment" button it will do the increment using increment() method for count variable :  this.count++
 * 5. It will also fire or emit result method registered in Parent component and will pass this.count like : this.result.emit(this.count);
 * 6. Parent component will receive output using ngOnChange event and will fire childOutputIncrement($event) method
 * 7. So finally you need to
 *      a. pass data or value to child component using square [] brackets ( @Input ) : This will be INPUT from parent to child
 *      b. pass events to parent using @Output() and use it in parent using round brackets (). this will be OUTPUT from child to parent
 */ 
