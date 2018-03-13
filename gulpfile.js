'use strict';

const gulp = require('gulp');
const realFavicon = require('gulp-real-favicon');
const rimraf = require('gulp-rimraf');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');
const swPrecache = require('sw-precache');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const jsonmin = require('gulp-jsonmin');
const buildBranch = require('gulp-build-branch');

const TMP_PATH = './.tmp/';
const SRC_PATH = './src/';
const DIST_PATH = './dist/';
const THEME_COLOR = '#151513';

gulp.task('generate-favicon', (done) => realFavicon.generateFavicon({
	masterPicture: `${ SRC_PATH }favicon.svg`,
	dest: `${ TMP_PATH }`,
	iconsPath: '/assets/images/icons/',
	design: {
		ios: {
			pictureAspect: 'backgroundAndMargin',
			backgroundColor: THEME_COLOR,
			margin: '14%',
			assets: {
				ios6AndPriorIcons: false,
				ios7AndLaterIcons: true,
				precomposedIcons: false,
				declareOnlyDefaultIcon: true
			}
		},
		desktopBrowser: {},
		windows: {
			pictureAspect: 'noChange',
			backgroundColor: THEME_COLOR,
			onConflict: 'override',
			assets: {
				windows80Ie10Tile: true,
				windows10Ie11EdgeTiles: {
					small: true,
					medium: true,
					big: true,
					rectangle: true
				}
			}
		},
		androidChrome: {
			pictureAspect: 'backgroundAndMargin',
			margin: '17%',
			backgroundColor: THEME_COLOR,
			themeColor: THEME_COLOR,
			manifest: {
				name: 'Magno Biét',
				startUrl: '/?launcher=true&utm_source=homescreen',
				display: 'standalone',
				orientation: 'portrait',
				onConflict: 'override',
				declared: true
			},
			assets: {
				legacyIcon: true,
				lowResolutionIcons: true
			}
		},
		safariPinnedTab: {
			pictureAspect: 'silhouette',
			themeColor: THEME_COLOR
		}
	},
	settings: {
		scalingAlgorithm: 'Mitchell',
		errorOnImageTooSmall: false
	},
	markupFile: `${ TMP_PATH }faviconData.json`
}, () => done()));

gulp.task('imagemin', () => gulp.src(`${ TMP_PATH }**/*.+(png|jpg|svg)`).pipe(
	imagemin()
).pipe(
	gulp.dest(`${ DIST_PATH }assets/images/icons/`)
));

gulp.task('htmlmin', () => gulp.src([
	`${ SRC_PATH }**/*.html`
]).pipe(
	htmlmin({
		collapseWhitespace: true,
		minifyJS: true,
		minifyCSS: true,
		removeComments: true,
		useShortDoctype: true
	})
).pipe(
	gulp.dest(DIST_PATH)
));

gulp.task('cssmin', () => gulp.src(`${ SRC_PATH }styles/*.css`).pipe(
	cssmin()
).pipe(
	gulp.dest(`${ DIST_PATH }assets/styles/`)
));

gulp.task('jsmin', () => gulp.src([
	`${ SRC_PATH }scripts/*.js`,
	`${ TMP_PATH }*.js`
]).pipe(
	uglify()
).pipe(
	gulp.dest(`${ DIST_PATH }assets/scripts/`)
));

gulp.task('jsonmin', () => gulp.src([
	`${ TMP_PATH }site.webmanifest`,
]).pipe(
	jsonmin()
).pipe(
	gulp.dest(DIST_PATH)
));

gulp.task('move', () => gulp.src([
	`${ TMP_PATH }favicon.ico`,
	`${ TMP_PATH }browserconfig.xml`,
	`${ SRC_PATH }CNAME`,
	'./LICENSE',
	'./README.md'
]).pipe(
	gulp.dest(DIST_PATH)
));

gulp.task('clean', () => gulp.src([
	DIST_PATH,
	TMP_PATH
], {
	read: false
}).pipe(
	rimraf()
));

gulp.task('generate-service-worker', () => swPrecache.write(`${ TMP_PATH }service-worker.js`, {
	staticFileGlobs: [
		`${ DIST_PATH }/**/*.{js,html,css,ico,png,jpg,gif,svg,eot,ttf,woff,json,xml}`
	],
	stripPrefix: './dist'
}));

gulp.task('build', (callback) => runSequence(
	'clean',
	'generate-favicon',
	'imagemin',
	'htmlmin',
	'cssmin',
	'jsonmin',
	'move',
	'generate-service-worker',
	'jsmin',
	callback
));

gulp.task('publish', ['build'], () => buildBranch({
	folder: DIST_PATH,
	branch: 'master',
	commit: `Build ${ new Date(Date.now()).toLocaleString() }`
}));

gulp.task('default', ['build']);
