// import external dependencies
import { defineConfig } from 'vitest/config';

////////////////////////////////////////////////////////////////////////////////////////////////////

const config = defineConfig({
    test: {
        coverage: {
            exclude: ['lib/index.ts', 'node_modules/**'],
            include: ['lib/**/*.ts']
        },
        include: ['lib/**/*.test.ts'],
    },
});

////////////////////////////////////////////////////////////////////////////////////////////////////

export default config;
