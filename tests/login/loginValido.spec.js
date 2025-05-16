import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');

test('Login valido', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);

  await loginPage.emailValido('andrezarafaella.xavier@gmail.com', 'Deza1985#');
  await loginPage.botaoEntrar();

  await page.waitForTimeout(3000);
});
