import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: [['html', {
        outputFolder: 'logs/report'
    }]],

    use: {
        headless: false,
        trace: 'on-first-retry',
        screenshot: 'on'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
};


export default config;