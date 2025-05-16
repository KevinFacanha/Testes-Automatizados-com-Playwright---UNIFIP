import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const SearchBarPage = require('../../pages/SearchBarPage');


test('Pesquisar um PDD com filtros', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);
  const searchBarPage = new SearchBarPage(page);
  

  await loginPage.emailValido('andrezarafaella.xavier@gmail.com', 'Deza1985#');
  await loginPage.botaoEntrar();

  
  await searchBarPage.botaoPDD();
  await searchBarPage.botaoPesquisar();
  await page.waitForTimeout(3000);
  await searchBarPage.selecionarCurso();
  await page.waitForTimeout(3000);
  await searchBarPage.selecionarDisciplina();
  await searchBarPage.nomeTutor('Kevin peçanha');
  await searchBarPage.selecionarSemestre();

  await searchBarPage.setCargaHoraria(40);

  await searchBarPage.selecionarStatus();
  await searchBarPage.selecionarBuscar();
  await page.waitForTimeout(3000);
  await searchBarPage.selecionarConfirmar();


});
