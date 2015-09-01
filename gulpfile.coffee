gulp   = require 'gulp'
server = require 'gulp-express'
coffee = require 'gulp-coffee'
cjsx   = require 'gulp-cjsx'
gutil  = require 'gulp-util'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
minifyCss = require 'gulp-minify-css'
exec = require('child_process').exec
watchify = require 'watchify'
streamify = require 'gulp-streamify'
concat = require 'gulp-concat'
yaml   = require 'gulp-yaml'

runCommand = (command) ->
  (cb) ->
    exec command, (err, stdout, stderr) ->
      console.log stdout
      console.log stderr
      cb(err)

gulp.task 'server', ->
  server.run
    file: 'app.js'

gulp.task 'watch', ->
  gulp.watch ['./assets/**/*.css'], ['minify-css']
  gulp.watch ['./app/**/*.coffee'], ['coffee', 'build', server.run]
  gulp.watch ['./app.js'], [server.run]
  gulp.watch ['./assets/**/*.cjsx'], ['cjsx', 'build', server.run]
  gulp.watch ['./contents/*.yml'], ['content', 'build', server.run]

gulp.task 'content', ->
  gulp.src('./contents/*.yml')
    .pipe(yaml())
    .pipe(concat('contents.json'))
    .pipe(gulp.dest('dest'))
    
gulp.task 'cjsx', ->
  gulp.src './assets/**/*.cjsx'
  .pipe cjsx
    bare: true
  .on 'error', gutil.log
  .pipe gulp.dest('./public/')

gulp.task 'server_coffee', () ->
  gulp.src ['./app.coffee'], base: 'app'
  .pipe coffee()
  .pipe gulp.dest('./')

gulp.task 'coffee', () ->
  gulp.src ['./app/controllers/*.coffee', './app/models/*.coffee'], base: 'app'
  .pipe coffee()
  .pipe gulp.dest('dest')

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

gulp.task 'start-mongo', runCommand('mongod --dbpath ./db/')
gulp.task 'stop-mongo',  runCommand('mongo --eval "use admin; db.shutdownServer();"')

gulp.task 'default', ['cjsx', 'content', 'build', 'coffee', 'watch', 'minify-css', 'server']
