import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import {configDefaults, UserConfig} from 'vitest/config'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            TanStackRouterVite(),
            react(),
        ],
        resolve: {
            alias: {
                '@app/hooks': '/src/app/shared/hooks',
                '@app/components': '/src/app/shared/components',
                '@app/helpers': '/src/app/shared/helpers',
                '@app': '/src/app',
                '@entities': '/src/models/entities',
                '@exceptions': '/src/models/exceptions',
                '@models': '/src/models',
                '@api': '/src/infrastructure/api',
                '@ui': '/src/infrastructure/ui',
                '@translation': '/src/infrastructure/translation',
                '@infrastructure': '/src/infrastructure'
            },
        },
        define: {
            ...Object.keys(env).reduce((prev: Record<string, string>, key: string) => {
                prev[`process.env.${key}`] = JSON.stringify(env[key])
                return prev
            }, {}),
        },
        test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: '/src/tests/setup.ts',
            exclude: [...configDefaults.exclude, 'path/to/exclude']
        },
    }
})
