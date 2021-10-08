'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
      pattern: '*'
    });

var exclude = '!source',
    source = 'source',
    build = 'build',
    config = {
      port: 2000,
      tunnel: false,
      notify: false,
      host: 'localhost',
      logPrefix: 'mysecondspace',
      server: {
        baseDir: build
      }
    },
    path = {
      exclude: {
        metafiles: exclude + '/*.html'
      },
      build: {
        html: build,
        metafiles: build,
        fonts: build + '/fonts',
        images: build + '/images',
        styles: build + '/styles',
        scripts: build + '/scripts',
        data: build + '/data',
        sw: build + '/sw.js'
      },
      source: {
        html: source + '/*.html',
        fonts: source + '/fonts/*.*',
        images: source + '/images/*.*',
        styles: source + '/styles/*.*',
        scripts: source + '/scripts/*.*',
        metafiles: source + '/*.*',
        data: source + '/data/*.*',
        sw: '**/*.*'
      },
      watch: {
        html: source + '/**/*.html',
        fonts: source + '/fonts/*.*',
        images: source + '/images/*.*',
        styles: source + '/styles/**/*.*',
        scripts: source + '/scripts/**/*.*',
        metafiles: source + '/*.*',
        data: source + '/data/*.*',
        sw: source + '/**/*.*'
      },
      clean: build
    };

gulp.task('html', () => {
  gulp.src(path.source.html)
    .pipe(plugins.plumber())
    .pipe(plugins.rigger())
    .pipe(plugins.htmlMinifier({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(plugins.browserSync.reload({
      stream: true
    }));
});

gulp.task('fonts', () => {
  gulp.src(path.source.fonts)
    .pipe(gulp.dest(path.build.fonts));
});

gulp.task('images', () => {
  gulp.src(path.source.images)
    .pipe(plugins.imagemin({
      progressive: true,
      use: [plugins.imageminPngquant()]
    }))
    .pipe(gulp.dest(path.build.images))
    .pipe(plugins.browserSync.reload({
      stream: true
    }));
});

gulp.task('compass', () => {
  gulp.src(path.source.styles)
    .pipe(plugins.plumber())
    .pipe(plugins.compass({
      config_file: 'config.rb',
      image: source + '/images',
      sass: source + '/styles',
      css: path.build.styles
    }))
    .pipe(plugins.base64())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(plugins.rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(path.build.styles))
    .pipe(plugins.browserSync.reload({
      stream: true
    }));
});

gulp.task('libs', () => {
  gulp.src('./bower.json')
    .pipe(plugins.mainBowerFiles('**/*.css'))
    .pipe(plugins.concatCss('libs.min.css'))
    .pipe(plugins.cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(path.build.styles));
});

gulp.task('scripts', () => {
  gulp.src(path.source.scripts)
    .pipe(plugins.plumber())
    .pipe(plugins.rigger())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.build.scripts))
    .pipe(plugins.browserSync.reload({
      stream: true
    }));
});

gulp.task('metafiles', () => {
  gulp.src([path.source.metafiles, path.exclude.metafiles])
    .pipe(gulp.dest(path.build.metafiles));
});

gulp.task('data', () => {
  gulp.src(path.source.data)
    .pipe(gulp.dest(path.build.data));
});

gulp.task('sw', () => {
  plugins.workboxBuild.generateSW({
    globDirectory: build,
    globPatterns: [path.source.sw],
    swDest: path.build.sw,
  });
});

gulp.task('server', () => {
  plugins.browserSync(config);
});

gulp.task('clean', function(cb) {
  plugins.rimraf(path.clean, cb);
});

gulp.task('watch', () => {
  plugins.watch([path.watch.html], gulp.series('html'));
  plugins.watch([path.watch.fonts], gulp.series('fonts'));
  plugins.watch([path.watch.images], gulp.series('images'));
  plugins.watch([path.watch.styles], gulp.series('compass'));
  plugins.watch([path.watch.scripts], gulp.series('scripts'));
  plugins.watch([path.watch.metafiles], gulp.series('metafiles'));
  plugins.watch([path.watch.data], gulp.series('data'));
  plugins.watch([path.watch.sw], gulp.series('sw'));
});

gulp.task('build', gulp.parallel('html', 'fonts', 'images', 'compass', 'libs', 'scripts', 'metafiles', 'data', 'sw'));

gulp.task('default', gulp.parallel('build', 'server', 'watch'));
