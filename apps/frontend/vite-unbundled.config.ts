// vite.config.ts clone with rollup unbundled settings
import { defineConfig } from 'vite';
import { configObj } from './vite.config';

export default defineConfig({
    ...configObj,
    build: {
        rollupOptions: {
            output: {
                format: 'es',
                // unbundled = bundle name is `lotem*` file name without extension
                manualChunks: function manualChunks(id:string) {
                    if (id.includes("lorem") && id.includes('.tsx')) {
                        // return file name without extension
                        return id.split('/').pop().replace('.tsx','');
                    }
                }
            },
        },
    },

});
