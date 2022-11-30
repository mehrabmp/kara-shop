import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'
   default 'list' when running locally */
  reporter: process.env.CI ? 'github' : 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    ...devices['Desktop Chrome'],
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on',
  },
  /* Configure projects for major browsers */
  // projects: [
  //   { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  //   { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  //   { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  // ],
};

export default config;
