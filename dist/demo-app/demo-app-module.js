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
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const demo_app_1 = require("./demo-app/demo-app");
const material_1 = require("@angular/material");
const routes_1 = require("./demo-app/routes");
const progress_bar_demo_1 = require("./progress-bar/progress-bar-demo");
const dialog_demo_1 = require("./dialog/dialog-demo");
const ripple_demo_1 = require("./ripple/ripple-demo");
const icon_demo_1 = require("./icon/icon-demo");
const gestures_demo_1 = require("./gestures/gestures-demo");
const card_demo_1 = require("./card/card-demo");
const chips_demo_1 = require("./chips/chips-demo");
const radio_demo_1 = require("./radio/radio-demo");
const button_toggle_demo_1 = require("./button-toggle/button-toggle-demo");
const progress_spinner_demo_1 = require("./progress-spinner/progress-spinner-demo");
const tooltip_demo_1 = require("./tooltip/tooltip-demo");
const list_demo_1 = require("./list/list-demo");
const baseline_demo_1 = require("./baseline/baseline-demo");
const grid_list_demo_1 = require("./grid-list/grid-list-demo");
const live_announcer_demo_1 = require("./live-announcer/live-announcer-demo");
const overlay_demo_1 = require("./overlay/overlay-demo");
const slide_toggle_demo_1 = require("./slide-toggle/slide-toggle-demo");
const toolbar_demo_1 = require("./toolbar/toolbar-demo");
const button_demo_1 = require("./button/button-demo");
const checkbox_demo_1 = require("./checkbox/checkbox-demo");
const select_demo_1 = require("./select/select-demo");
const slider_demo_1 = require("./slider/slider-demo");
const sidenav_demo_1 = require("./sidenav/sidenav-demo");
const snack_bar_demo_1 = require("./snack-bar/snack-bar-demo");
const portal_demo_1 = require("./portal/portal-demo");
const menu_demo_1 = require("./menu/menu-demo");
const tabs_demo_1 = require("./tabs/tabs-demo");
const platform_demo_1 = require("./platform/platform-demo");
const autocomplete_demo_1 = require("./autocomplete/autocomplete-demo");
const input_demo_1 = require("./input/input-demo");
const style_demo_1 = require("./style/style-demo");
let DemoAppModule = class DemoAppModule {
    constructor(_appRef) {
        this._appRef = _appRef;
    }
    ngDoBootstrap() {
        this._appRef.bootstrap(demo_app_1.DemoApp);
    }
};
DemoAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes_1.DEMO_APP_ROUTES),
            material_1.MaterialModule.forRoot(),
            material_1.MdSelectionModule,
        ],
        declarations: [
            autocomplete_demo_1.AutocompleteDemo,
            baseline_demo_1.BaselineDemo,
            button_demo_1.ButtonDemo,
            button_toggle_demo_1.ButtonToggleDemo,
            card_demo_1.CardDemo,
            chips_demo_1.ChipsDemo,
            checkbox_demo_1.CheckboxDemo,
            demo_app_1.DemoApp,
            dialog_demo_1.DialogDemo,
            gestures_demo_1.GesturesDemo,
            grid_list_demo_1.GridListDemo,
            demo_app_1.Home,
            icon_demo_1.IconDemo,
            input_demo_1.InputDemo,
            dialog_demo_1.JazzDialog,
            dialog_demo_1.ContentElementDialog,
            dialog_demo_1.IFrameDialog,
            list_demo_1.ListDemo,
            live_announcer_demo_1.LiveAnnouncerDemo,
            checkbox_demo_1.MdCheckboxDemoNestedChecklist,
            menu_demo_1.MenuDemo,
            snack_bar_demo_1.SnackBarDemo,
            overlay_demo_1.OverlayDemo,
            portal_demo_1.PortalDemo,
            progress_bar_demo_1.ProgressBarDemo,
            progress_spinner_demo_1.ProgressSpinnerDemo,
            radio_demo_1.RadioDemo,
            ripple_demo_1.RippleDemo,
            overlay_demo_1.RotiniPanel,
            portal_demo_1.ScienceJoke,
            select_demo_1.SelectDemo,
            sidenav_demo_1.SidenavDemo,
            slider_demo_1.SliderDemo,
            slide_toggle_demo_1.SlideToggleDemo,
            overlay_demo_1.SpagettiPanel,
            style_demo_1.StyleDemo,
            toolbar_demo_1.ToolbarDemo,
            tooltip_demo_1.TooltipDemo,
            tabs_demo_1.TabsDemo,
            tabs_demo_1.SunnyTabContent,
            tabs_demo_1.RainyTabContent,
            tabs_demo_1.FoggyTabContent,
            platform_demo_1.PlatformDemo,
        ],
        providers: [
            { provide: material_1.OverlayContainer, useClass: material_1.FullscreenOverlayContainer }
        ],
        entryComponents: [
            demo_app_1.DemoApp,
            dialog_demo_1.JazzDialog,
            dialog_demo_1.ContentElementDialog,
            dialog_demo_1.IFrameDialog,
            overlay_demo_1.RotiniPanel,
            portal_demo_1.ScienceJoke,
            overlay_demo_1.SpagettiPanel,
        ],
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], DemoAppModule);
exports.DemoAppModule = DemoAppModule;
