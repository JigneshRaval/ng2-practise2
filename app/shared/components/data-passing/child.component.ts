import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'child-component1',
    template: `
        <input placeholder="{{emai}}" #emailbox/>
        <button class="red" (click)="registerEmail(emailbox)">Register</button>
    `
})
export class ChildComponent1{
    @Input('placeholder') 
    email: string = "Type your email address.";

    @Output() emailRegister = new EventEmitter();
    
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
}