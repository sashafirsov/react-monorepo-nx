import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: '../../../node_modules/.vite/frontend-odd',

    plugins: [
        react(),
        nxViteTsPaths(),
        dts({
            entryRoot: 'src',
            tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
            skipDiagnostics: true,
        }),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
        outDir: '../../../dist/apps/frontend/odd',
        reportCompressedSize: true,
        commonjsOptions: { transformMixedEsModules: true }, // entry: 'src/index.ts',
        // name: 'frontend-odd',
        // fileName: 'index',
        // formats: ['es', 'mjs'],
        // external: ['react', 'react-dom', 'react/jsx-runtime'],
        lib: {
            entry: 'src/index.ts',
            name: 'frontend-odd',
            fileName: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            external: ["'react'", "'react-dom'", "'react/jsx-runtime'"],
        },
    },

    test: {
        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../../coverage/apps/frontend/odd',
            provider: 'v8',
        },
        globals: true,
        cache: { dir: '../../../node_modules/.vitest' },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
});
