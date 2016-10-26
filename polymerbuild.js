const project = new PolymerProject({
    entrypoint: 'index.html',
    shell: 'src/credz-app/app.html',
    fragments: [
        'src/credz-app/dashboard.html',
        'src/credz-app/legal.html',
        'src/credz-app/new.html',
        'src/credz-app/topnav.html'
    ],
    sources: [
        'src/**',
        '/entrypoint.js',
        '/index.html',
        '/manifest.json',
        '/package.json',
        '/service-worker.js'
    ]
});


const mergeStream = require('merge-stream');
const forkStream = require('polymer-build').forkStream;

const buildStream = mergeStream(project.sources(), project.dependencies())
  .pipe(project.analyzer);

const unbundledBuildStream = forkStream(buildStream)
  .pipe(dest('build/unbundled'));

const bundledBuildStream = forkStream(buildStream)
  .pipe(polymerProject.bundler)
  .pipe(dest('build/bundled'));
