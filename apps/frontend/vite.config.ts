import { defineConfig, UserConfigExport } from "vite";
import react from '@vitejs/plugin-react-swc';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export const configObj:  UserConfigExport = {
    cacheDir: '../../node_modules/.vite/frontend',

    server: {
        port: 4200,
        host: 'localhost',
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['../..'],
        },
    },

    preview: {
        port: 4300,
        host: 'localhost',
    },

    plugins: [react(), nxViteTsPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
        rollupOptions: {
            output: {
                format: 'es',
                // manualChunks: function manualChunks(id:string) {
                //     if (id.includes("lorem") ) {
                //         return id.includes("even") ? 'lorem-even' : id.includes("odd") ? 'lorem-oss' : 'lorem-shared';
                //     }
                // }
            },
        },
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    test: {
        globals: true,
        cache: { dir: '../../node_modules/.vitest' },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
    base: '',
};

export default defineConfig(configObj);
