const mix = require('laravel-mix');

mix.copy(['index.html'], 'dist')

mix.sass('src/scss/app.scss', '/assets/css/')
    .options({processCssUrls: false})
    .setPublicPath('dist');

mix.js('src/js/app.js', 'assets/js/')
.setPublicPath('dist');