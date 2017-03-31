"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabs_demo_1 = require("../tabs/tabs-demo");
exports.TABS_DEMO_ROUTES = [
    { path: '', redirectTo: 'sunny-tab', pathMatch: 'full' },
    { path: 'sunny-tab', component: tabs_demo_1.SunnyTabContent },
    { path: 'rainy-tab', component: tabs_demo_1.RainyTabContent },
    { path: 'foggy-tab', component: tabs_demo_1.FoggyTabContent },
];
