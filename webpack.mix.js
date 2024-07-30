let mix = require('laravel-mix');

mix.js('public/js/app.js', 'dist/js').setPublicPath('public');
mix.sass('public/scss/global.scss', 'dist/css');
mix.sass('public/scss/common.scss', 'dist/css');
