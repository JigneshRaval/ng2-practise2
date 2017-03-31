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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const material_1 = require("@angular/material");
let DialogDemo = class DialogDemo {
    constructor(dialog, doc) {
        this.dialog = dialog;
        this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                message: 'Jazzy jazz jazz'
            }
        };
        this.numTemplateOpens = 0;
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        dialog.afterOpen.subscribe((ref) => {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(() => {
            doc.body.classList.remove('no-scroll');
        });
    }
    openJazz() {
        this.dialogRef = this.dialog.open(JazzDialog, this.config);
        this.dialogRef.afterClosed().subscribe((result) => {
            this.lastCloseResult = result;
            this.dialogRef = null;
        });
    }
    openContentElement() {
        let dialogRef = this.dialog.open(ContentElementDialog, this.config);
        dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
    }
    openTemplate() {
        this.numTemplateOpens++;
        this.dialog.open(this.template, this.config);
    }
};
__decorate([
    core_1.ViewChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], DialogDemo.prototype, "template", void 0);
DialogDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dialog-demo',
        templateUrl: 'dialog-demo.html',
        styleUrls: ['dialog-demo.css'],
    }),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [material_1.MdDialog, Object])
], DialogDemo);
exports.DialogDemo = DialogDemo;
let JazzDialog = class JazzDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
JazzDialog = __decorate([
    core_1.Component({
        selector: 'demo-jazz-dialog',
        template: `
  <p>It's Jazz!</p>
  <p><label>How much? <input #howMuch></label></p>
  <p> {{ data.message }} </p>
  <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
    }),
    __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [material_1.MdDialogRef, Object])
], JazzDialog);
exports.JazzDialog = JazzDialog;
let ContentElementDialog = class ContentElementDialog {
    constructor(dialog) {
        this.dialog = dialog;
    }
    showInStackedDialog() {
        this.dialog.open(IFrameDialog);
    }
};
ContentElementDialog = __decorate([
    core_1.Component({
        selector: 'demo-content-element-dialog',
        styles: [
            `img {
      max-width: 100%;
    }`
        ],
        template: `
    <h2 md-dialog-title>Neptune</h2>

    <md-dialog-content>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"/>

      <p>
        Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the
        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,
        and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more
        massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger
        than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1
        astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the
        astronomical symbol ♆, a stylised version of the god Neptune's trident.
      </p>
    </md-dialog-content>

    <md-dialog-actions [attr.align]="actionsAlignment">
      <button
        md-raised-button
        color="primary"
        md-dialog-close>Close</button>

      <a
        md-button
        color="primary"
        href="https://en.wikipedia.org/wiki/Neptune"
        target="_blank">Read more on Wikipedia</a>

      <button
        md-button
        color="secondary"
        (click)="showInStackedDialog()">
        Show in Dialog</button>
    </md-dialog-actions>
  `
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], ContentElementDialog);
exports.ContentElementDialog = ContentElementDialog;
let IFrameDialog = class IFrameDialog {
};
IFrameDialog = __decorate([
    core_1.Component({
        selector: 'demo-iframe-dialog',
        styles: [
            `iframe {
      width: 800px;
    }`
        ],
        template: `
    <h2 md-dialog-title>Neptune</h2>

    <md-dialog-content>
      <iframe frameborder="0" src="https://en.wikipedia.org/wiki/Neptune"></iframe>
    </md-dialog-content>

    <md-dialog-actions>
      <button
        md-raised-button
        color="primary"
        md-dialog-close>Close</button>
    </md-dialog-actions>
  `
    })
], IFrameDialog);
exports.IFrameDialog = IFrameDialog;
