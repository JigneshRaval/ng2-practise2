import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'parent-component1',
    template: `
    <div>  
        <br />  
        <h2>Email Register control with Events ( Parent Component )</h2>  
        <child-component1 [placeholder]="'Put your email'" (emailRegister)="confirmRegister($event)"></child-component1>
    </div>  
    `
})
export class ParentComponent1 implements OnInit{
    constructor() {

    }

    ngOnInit() {

    }

    confirmRegister(email: string) {

        console.log("Register Email Address is " + email);
        
    }
}