// Example 3 : Data passing between components
// Intercept input property changes with a setter
//================================================================
import { Component, Input, Output, EventEmitter } from "@angular/core";

// Child Component
//================================================================
@Component({
    selector: 'rio-counter3',
    template: `
        <div style="border: 1px solid #f3c0c0; background: #fbecec; padding: 1em;">
            <h2>Child Component 2</h2>
            <h3>2. Input input operations with setter (Intercept input property changes with a setter)</h3>
            <p>User Name : "{{otherUserName}}". <em>Passed from Parent Component</em></p>
        </div>
    `
})
export class RioCounterComponent3{
    private _otherUserName = '';

    @Input()
    set otherUserName(name: string) {
        console.log("Name :", name);
        this._otherUserName = (name && name.trim()) || '<no name set>';
    }

    get otherUserName() {
        return this._otherUserName;
    }
}

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