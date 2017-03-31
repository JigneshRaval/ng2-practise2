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
let Home = class Home {
};
Home = __decorate([
    core_1.Component({
        selector: 'home',
        template: `
    <p>Welcome to the development demos for Angular Material!</p>
    <p>Open the sidenav to select a demo. </p>
  `
    })
], Home);
exports.Home = Home;
let DemoApp = class DemoApp {
    constructor(_element) {
        this._element = _element;
        this.navItems = [
            { name: 'Autocomplete', route: 'autocomplete' },
            { name: 'Button', route: 'button' },
            { name: 'Button Toggle', route: 'button-toggle' },
            { name: 'Card', route: 'card' },
            { name: 'Chips', route: 'chips' },
            { name: 'Checkbox', route: 'checkbox' },
            { name: 'Dialog', route: 'dialog' },
            { name: 'Gestures', route: 'gestures' },
            { name: 'Grid List', route: 'grid-list' },
            { name: 'Icon', route: 'icon' },
            { name: 'Input', route: 'input' },
            { name: 'List', route: 'list' },
            { name: 'Menu', route: 'menu' },
            { name: 'Live Announcer', route: 'live-announcer' },
            { name: 'Overlay', route: 'overlay' },
            { name: 'Portal', route: 'portal' },
            { name: 'Progress Bar', route: 'progress-bar' },
            { name: 'Progress Spinner', route: 'progress-spinner' },
            { name: 'Radio', route: 'radio' },
            { name: 'Ripple', route: 'ripple' },
            { name: 'Select', route: 'select' },
            { name: 'Sidenav', route: 'sidenav' },
            { name: 'Slider', route: 'slider' },
            { name: 'Slide Toggle', route: 'slide-toggle' },
            { name: 'Snack Bar', route: 'snack-bar' },
            { name: 'Tabs', route: 'tabs' },
            { name: 'Toolbar', route: 'toolbar' },
            { name: 'Tooltip', route: 'tooltip' },
            { name: 'Platform', route: 'platform' },
            { name: 'Style', route: 'style' }
        ];
    }
    toggleFullscreen() {
        let elem = this._element.nativeElement.querySelector('.demo-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    }
};
DemoApp = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'demo-app',
        providers: [],
        templateUrl: 'demo-app.html',
        styleUrls: ['demo-app.css'],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DemoApp);
exports.DemoApp = DemoApp;
