import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');

test('Header FIP', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);

  await loginPage.emailValido('andrezarafaella.xavier@gmail.com', 'Deza1985#');
  await loginPage.botaoEntrar();

  await page.waitForTimeout(3000);

  await headerPage.campoMenu();
  await headerPage.botaoInicio();
  await headerPage.campoMenu();
  await headerPage.botaoPdd();
  await page.waitForTimeout(3000);
  await headerPage.botaoDashboardPdd();
  await headerPage.campoInicio();
  await headerPage.campoMenu();
  await page.waitForTimeout(3000);
  await headerPage.botaoDeslogar();
  await headerPage.campoDeslogar();

  

  
  

});