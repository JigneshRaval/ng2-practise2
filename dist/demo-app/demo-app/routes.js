"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demo_app_1 = require("./demo-app");
const button_demo_1 = require("../button/button-demo");
const baseline_demo_1 = require("../baseline/baseline-demo");
const button_toggle_demo_1 = require("../button-toggle/button-toggle-demo");
const tabs_demo_1 = require("../tabs/tabs-demo");
const grid_list_demo_1 = require("../grid-list/grid-list-demo");
const gestures_demo_1 = require("../gestures/gestures-demo");
const live_announcer_demo_1 = require("../live-announcer/live-announcer-demo");
const list_demo_1 = require("../list/list-demo");
const icon_demo_1 = require("../icon/icon-demo");
const toolbar_demo_1 = require("../toolbar/toolbar-demo");
const checkbox_demo_1 = require("../checkbox/checkbox-demo");
const overlay_demo_1 = require("../overlay/overlay-demo");
const portal_demo_1 = require("../portal/portal-demo");
const progress_bar_demo_1 = require("../progress-bar/progress-bar-demo");
const progress_spinner_demo_1 = require("../progress-spinner/progress-spinner-demo");
const select_demo_1 = require("../select/select-demo");
const sidenav_demo_1 = require("../sidenav/sidenav-demo");
const slide_toggle_demo_1 = require("../slide-toggle/slide-toggle-demo");
const slider_demo_1 = require("../slider/slider-demo");
const radio_demo_1 = require("../radio/radio-demo");
const card_demo_1 = require("../card/card-demo");
const chips_demo_1 = require("../chips/chips-demo");
const menu_demo_1 = require("../menu/menu-demo");
const ripple_demo_1 = require("../ripple/ripple-demo");
const dialog_demo_1 = require("../dialog/dialog-demo");
const tooltip_demo_1 = require("../tooltip/tooltip-demo");
const snack_bar_demo_1 = require("../snack-bar/snack-bar-demo");
const routes_1 = require("../tabs/routes");
const platform_demo_1 = require("../platform/platform-demo");
const autocomplete_demo_1 = require("../autocomplete/autocomplete-demo");
const input_demo_1 = require("../input/input-demo");
const style_demo_1 = require("../style/style-demo");
exports.DEMO_APP_ROUTES = [
    { path: '', component: demo_app_1.Home },
    { path: 'autocomplete', component: autocomplete_demo_1.AutocompleteDemo },
    { path: 'button', component: button_demo_1.ButtonDemo },
    { path: 'card', component: card_demo_1.CardDemo },
    { path: 'chips', component: chips_demo_1.ChipsDemo },
    { path: 'radio', component: radio_demo_1.RadioDemo },
    { path: 'select', component: select_demo_1.SelectDemo },
    { path: 'sidenav', component: sidenav_demo_1.SidenavDemo },
    { path: 'slide-toggle', component: slide_toggle_demo_1.SlideToggleDemo },
    { path: 'slider', component: slider_demo_1.SliderDemo },
    { path: 'progress-spinner', component: progress_spinner_demo_1.ProgressSpinnerDemo },
    { path: 'progress-bar', component: progress_bar_demo_1.ProgressBarDemo },
    { path: 'portal', component: portal_demo_1.PortalDemo },
    { path: 'overlay', component: overlay_demo_1.OverlayDemo },
    { path: 'checkbox', component: checkbox_demo_1.CheckboxDemo },
    { path: 'input', component: input_demo_1.InputDemo },
    { path: 'toolbar', component: toolbar_demo_1.ToolbarDemo },
    { path: 'icon', component: icon_demo_1.IconDemo },
    { path: 'list', component: list_demo_1.ListDemo },
    { path: 'menu', component: menu_demo_1.MenuDemo },
    { path: 'live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemo },
    { path: 'gestures', component: gestures_demo_1.GesturesDemo },
    { path: 'grid-list', component: grid_list_demo_1.GridListDemo },
    { path: 'tabs', component: tabs_demo_1.TabsDemo, children: routes_1.TABS_DEMO_ROUTES },
    { path: 'button-toggle', component: button_toggle_demo_1.ButtonToggleDemo },
    { path: 'baseline', component: baseline_demo_1.BaselineDemo },
    { path: 'ripple', component: ripple_demo_1.RippleDemo },
    { path: 'dialog', component: dialog_demo_1.DialogDemo },
    { path: 'tooltip', component: tooltip_demo_1.TooltipDemo },
    { path: 'snack-bar', component: snack_bar_demo_1.SnackBarDemo },
    { path: 'platform', component: platform_demo_1.PlatformDemo },
    { path: 'style', component: style_demo_1.StyleDemo },
];
