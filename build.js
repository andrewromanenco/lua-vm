const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outfile: 'dist/lua-vm.js',
    format: 'iife',
    globalName: 'LuaVM',
    platform: 'browser',
    target: ['es6'],
  })
  .catch(() => process.exit(1));
