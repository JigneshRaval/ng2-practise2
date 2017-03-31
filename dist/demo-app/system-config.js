/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    var paths = {
        // paths serve as alias
        'npm:': '../dist/lib/'
    };
    // map tells the System loader where to look for things
    var map = {
        'app': '../dist',
        'tsconfig.json': './tsconfig.json',
        '@angular': 'npm:@angular',
        'angular2-in-memory-web-api': './node_modules/angular2-in-memory-web-api',
        'rxjs': './node_modules/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
        'material'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        transpiler: 'typescript',
        typescriptOptions: {
            emitDecoratorMetadata: true,
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        paths: paths,
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
