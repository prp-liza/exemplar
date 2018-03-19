
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



gulp.task('live-server', function(){
	var server = new liveServer('server/main.js');
	server.start();
})



gulp.task('bundle', function(){
	return browserify({
		extensions: ['.js', '.jsx'],
		entries: 'app/main.jsx',							//starting point
		debug: true,
	})
	.transform(babelify)									//turn all files into JS from JSX
	.bundle()												//Bundle them into one file
	.pipe(source('app.js'))									//pipe it to the vinyl source stream to be processed
	.pipe(gulp.dest('./.tmp'))								//send the compiled file to destination
})



gulp.task('default', ['bundle', 'live-server'], function(){ 			
	browserSync.init(null,{
		proxy: "http://localhost:50000",
		port: 9001,
	})
})