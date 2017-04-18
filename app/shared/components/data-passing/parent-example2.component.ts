// Example 2 : Data passing between components
//================================================================
import { Component, OnChanges } from "@angular/core";

// Parent Component
//================================================================
@Component({
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
export class RioCounterParentComponent implements OnChanges {
    num: number = 10;
    myUserName = "Hiren Patel";    
    myOtherUserName = 'Jay Lalita';
    parentCount: number = 0;

    ngOnChanges() {
        
    }
    /**
     * Get value passed from child component and assing it to local variable named parentCount using -> this.parentCount 
     * @param val {number} takes one argument which is nummber
     */
    childOutputIncrement(val: number) {
        this.parentCount = val;
    }

}

/**
 * Together a set of input + output bindings define the public API of your component.
 * In our templates we use the [squareBrackets] to pass inputs and the (parenthesis) to handle outputs.
 */