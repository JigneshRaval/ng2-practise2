/**
 * This is the main entry-point for the AOT compilation. File will be used to test AOT support.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const demo_app_module_ngfactory_1 = require("./demo-app-module.ngfactory");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModuleFactory(demo_app_module_ngfactory_1.DemoAppModuleNgFactory);
