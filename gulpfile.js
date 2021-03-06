
/*

var module = require('module');
gulp.task - define tasks
gulp.src - points to files or folders
gulp.dest - where to place the compiled files
gulp.watch - watch files folders

*/


var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify  = require('babelify');
var historyFallback = require ('connect-history-api-fallback');

// send all files compiled to this destination
var dest = './public';


// folders to watch
var folders = [
	"app/*.*",
	"app/dev/actions/*.*", 
	"app/dev/components/faq/*.*", 
	"app/dev/components/*.*", 
	"app/dev/reducers/*.*", 
	"app/dev/reducers/faq/*.*",
	".tmp/css/*.*",
	"server/*.*",
]


gulp.task('live-server', function(){
	var server = new liveServer('server/main.js');
	server.start();
})


// process JS and JSX files and return the stream.
gulp.task('bundle', function(){
	return browserify({
		extensions: ['.js', '.jsx'],
		entries: 'app/main.jsx',							//starting point
		debug: true,
	})
	.transform(babelify)									//turn all files into JS from JSX
	.bundle()												//Bundle them into one file
	.pipe(source('app.min.js'))								//pipe it to the vinyl source stream to be processed
	.pipe(gulp.dest(dest+ '/js'))								//send the compiled file to destination
})



//task that ensures the `bundle` task is complete before reloading browsers
gulp.task('js-watch', ['bundle'], function (done) {
    browserSync.reload();
    done();
});



// default task to be run with `gulp`
// this default task will run BrowserSync & then use Gulp to watch files.
// when a file is changed, an event is emitted to BrowserSync
gulp.task('default', ['bundle', 'live-server'], function(){ 			
	browserSync.init(null,{
		proxy: "http://localhost:50000",
		port: 9001
	});

	gulp.watch(folders, ['js-watch']);
})