import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('Button Base', async ({ page }) => {
  expect(await page.screenshot()).toMatchSnapshot('button-base.png');
});