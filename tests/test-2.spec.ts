import { test, expect } from '@playwright/test';

test('checking navigation elements (header)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
});

test('checking the names of navigation elements', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect(page.getByRole('link', { name: 'Community' })).toContainText('Community');
});

test('проверка атрибутов href элементов навигации', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
    'href',
    '/docs/api/class-playwright',
  );
  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
    'href',
    '/community/welcome',
  );
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
    'href',
    'https://github.com/microsoft/playwright',
  );
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
    'href',
    'https://aka.ms/playwright/discord',
  );
});

test('проверка переключения light/dark mode', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Проверяем, что изначально тема светлая
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  // Кликаем по кнопке переключения темы
  await page.getByLabel('Switch between dark and light mode (currently system mode)').click();
  await page.getByLabel('Switch between dark and light mode (currently light mode)').click();
  // Проверяем, что тема изменилась на тёмную
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('проверка заголовка страницы', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.',
  );
});

test('проверка кнопки Get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('banner')).toContainText('Get started');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
