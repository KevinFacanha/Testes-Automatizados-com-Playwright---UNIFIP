import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');

test('Dashboard PDD', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);
  const homepage = new HomePage(page);

  await loginPage.emailValido('andrezarafaella.xavier@gmail.com', 'Deza1985#');
  await loginPage.botaoEntrar();

  await page.waitForTimeout(3000);

  await homepage.botaoPDD();

  await page.waitForTimeout(3000);

  await homepage.botaoIncompleto();

  await homepage.botaoVisualizarArquivo();
  await homepage.botaoVoltarPDD();
  await homepage.botaoDelete();

  await homepage.botaoConfirme();
  

  await homepage.botaoAceitar();
  


});
