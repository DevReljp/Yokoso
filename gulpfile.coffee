gulp   = require 'gulp'
server = require 'gulp-express'
cjsx   = require 'gulp-cjsx'
gutil  = require 'gulp-util'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
minifyCss = require 'gulp-minify-css'

# start the server at the beginning of the task
gulp.task 'server', ->
  server.run
    file: 'app.js'

gulp.task 'watch', ->
  gulp.watch ['./assets/**/*.coffee'], ['build']
  gulp.watch ['./assets/**/*.css'], ['minify-css']
  gulp.watch ['./app.js'], [server.run]
  gulp.watch ['./assets/**/*.cjsx'], ['cjsx', server.run]

gulp.task 'cjsx', ->
  gulp.src './assets/**/*.cjsx'
  .pipe cjsx
    bare: true
  .on 'error', gutil.log
  .pipe gulp.dest('./public/')
 
gulp.task 'minify-css', ->
  gulp.src('assets/stylesheets/*.css')
  .pipe minifyCss(compatibility: 'ie8')
  .pipe gulp.dest('./public/stylesheets/')

gulp.task 'build', ->
  browserify 
    entries: ['./assets/application.coffee']
    extensions: ['.js']
  .transform 'coffeeify'
  .bundle()
  .pipe source 'application.js'
  .pipe gulp.dest './public/javascripts/'
gulp.task 'default', ['cjsx', 'server', 'watch', 'build', 'minify-css']
