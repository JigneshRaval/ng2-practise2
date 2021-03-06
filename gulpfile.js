const gulp = require("gulp");
const del = require('del');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

var marked = require('marked');
const markdownDocs = require('gulp-markdown-docs');
var markdown = require('gulp-markdown-it');

gulp.task('markdown', function() {
    return gulp.src('./docs/**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('./documentation/'));
});

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

/**
	* Compile TypeScript sources and create sourcemaps in build directory.
*/
gulp.task("compile", () => {
    let tsResult = gulp.src("app/**/*.ts")
	.pipe(tsProject())
	.pipe(gulp.dest("dist"));
});

/**
	* Copy all resources like HTML,CSS, JS that are not TypeScript files into build directory.
*/
gulp.task("copy:assets", () => {
    return gulp.src(["app/**/*.ts", '*.html', '*.css', "!**/*.ts"], { base: './' })
	.pipe(gulp.dest("dist"));
});

gulp.task("copy:html", () => {
    return gulp.src("./app/**/*.html")
	.pipe(gulp.dest("dist"));
});

gulp.task("copy:js", () => {
    return gulp.src("./app/**/*.js")
	.pipe(gulp.dest("dist"));
});

/**
	* Copy all required libraries into ../ build / lib directory.
*/
gulp.task("copy:libs", () => {
    return gulp.src([
        'node_modules/typescript/lib/typescript.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/**/@angular/**/bundles/*.umd.js',
        'node_modules/systemjs/dist/system.src.js'
	])
	.pipe(gulp.dest("dist/lib"));
});

/**
	* Watch for changes in TypeScript, HTML and CSS files.
*/
gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
	});
	
    gulp.watch(["app/**/*.html", './*.html', './*.css', "app/**/*.css"], ['copy:assets']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
	});
	
    // html changes    
    gulp.watch('./app/**/*.html', ['copy:html']);
	
    // javascript changes
    gulp.watch('./app/**/*.js', ['copy:js']);
	
    // css changes
    //gulp.watch(folder.src + 'scss/**/*', ['css']);    
	
});


/**
	* Build the project.
*/
gulp.task("default", ['compile', 'copy:assets', 'copy:libs'], () => {
    console.log("Building the project ...");
});

/**
	* Convert Markdown files ( .md ) to HTML files
	*/
	gulp.task('convertMD', function () {
		return gulp.src('./docs/**/*.md')
		.pipe(markdownDocs('index.html', {
			
		}))
		.pipe(gulp.dest('./documentation/'));
	});	