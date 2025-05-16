// @ts-check
import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');

test('Login invalido', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);

  await loginPage.emailInvalido('facanha123@gmail.com', 'kevin11');
  await loginPage.botaoEntrar();

  await page.waitForTimeout(3000);
});
