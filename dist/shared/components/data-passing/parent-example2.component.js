"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Example 2 : Data passing between components
//================================================================
const core_1 = require("@angular/core");
// Parent Component
//================================================================
let RioCounterParentComponent = class RioCounterParentComponent {
    // Parent Component
    //================================================================
    constructor() {
        this.num = 10;
        this.myUserName = "Hiren Patel";
        this.myOtherUserName = 'Jay Lalita';
        this.parentCount = 0;
    }
    ngOnChanges() {
    }
    /**
     * Get value passed from child component and assing it to local variable named parentCount using -> this.parentCount
     * @param val {number} takes one argument which is nummber
     */
    childOutputIncrement(val) {
        this.parentCount = val;
    }
};
RioCounterParentComponent = __decorate([
    core_1.Component({
        selector: 'rio-parent',
        template: `
        <div style="border: 1px solid #CCC; background: #EEE; padding: 2em;">
            <h2>Parent Component</h2>
            <p>Parent Number: {{num}}</p>
            <p>Parent Count: {{parentCount}}</p>

            <!-- Child Component 1 : child-example2.component.ts -->
            <rio-counter2 [count]="num" [userName]="myUserName" (result)="childOutputIncrement($event)"></rio-counter2>

            <!-- Child Component 2 : child-example3.component.ts -->
            <rio-counter3 [otherUserName]="myOtherUserName"></rio-counter3>
        </div>
    `
    })
], RioCounterParentComponent);
exports.RioCounterParentComponent = RioCounterParentComponent;
/**
 * Together a set of input + output bindings define the public API of your component.
 * In our templates we use the [squareBrackets] to pass inputs and the (parenthesis) to handle outputs.
 */ 
