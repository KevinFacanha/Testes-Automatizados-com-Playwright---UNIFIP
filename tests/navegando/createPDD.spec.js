import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const CreatePDDPage = require('../../pages/CreatePDDPage');

test('Criação PDD', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);
  const createPddpage = new CreatePDDPage(page);

  await loginPage.emailValido('andrezarafaella.xavier@gmail.com', 'Deza1985#');
  await loginPage.botaoEntrar();

  await page.waitForTimeout(3000);

  await createPddpage.botaoCreatePdd();
  await createPddpage.botaoNovoPdd();
  await createPddpage.botaoProximo();
  

  await createPddpage.botaoConfirmar();
  await page.waitForTimeout(3000);
  await createPddpage.botaoVoltar();
});