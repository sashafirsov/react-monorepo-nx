// vite.config.ts clone with rollup unbundled settings
import { defineConfig } from 'vite';
import {configObj} from './vite.config';


export default defineConfig({
    ...configObj,

    build: {
        rollupOptions: {
            output: {
                format: 'es', // unbundled
            },
        },
    },
});
