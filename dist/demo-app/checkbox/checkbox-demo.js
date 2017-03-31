"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MdCheckboxDemoNestedChecklist = class MdCheckboxDemoNestedChecklist {
    constructor() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular', completed: false }
                ]
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false }
                ]
            }
        ];
    }
    allComplete(task) {
        let subtasks = task.subtasks;
        return subtasks.every(t => t.completed) ? true
            : subtasks.every(t => !t.completed) ? false
                : task.completed;
    }
    someComplete(tasks) {
        const numComplete = tasks.filter(t => t.completed).length;
        return numComplete > 0 && numComplete < tasks.length;
    }
    setAllCompleted(tasks, completed) {
        tasks.forEach(t => t.completed = completed);
    }
};
MdCheckboxDemoNestedChecklist = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-checkbox-demo-nested-checklist',
        styles: [`
    li {
      margin-bottom: 4px;
    }
  `],
        templateUrl: 'nested-checklist.html',
    })
], MdCheckboxDemoNestedChecklist);
exports.MdCheckboxDemoNestedChecklist = MdCheckboxDemoNestedChecklist;
let CheckboxDemo = class CheckboxDemo {
    constructor() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
        this.useAlternativeColor = false;
    }
    printResult() {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    }
    checkboxColor() {
        return this.useAlternativeColor ? 'primary' : 'accent';
    }
};
CheckboxDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-checkbox-demo',
        templateUrl: 'checkbox-demo.html',
        styleUrls: ['checkbox-demo.css'],
    })
], CheckboxDemo);
exports.CheckboxDemo = CheckboxDemo;
