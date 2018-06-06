const gulp = require('gulp'); // Init Gulp
const autoprefixer = require('gulp-autoprefixer'); // Init Gulp autoprefixer

// Autoprefixer
gulp.task('autoprefixer', function () {
    gulp.src('source/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('app/css'))
});

// Watch
gulp.task('watch', ['autoprefixer'], function () {
    gulp.watch('source/css/**/*.css', ['autoprefixer']); // Отслеживаем директорию со стилями и запускаем таск autoprefixer
});

// Default task
gulp.task('default', ['watch']);