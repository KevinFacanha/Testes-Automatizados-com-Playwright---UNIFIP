import { test, expect } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const SocialMediaPage = require('../../pages/SocialMediaPage');
const FooterLinksPage = require('../../pages/FooterLinksPage');


test('Navegando pela página', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
  const loginPage = new LoginPage(page);
  const social = new SocialMediaPage(page);
  const footer = new FooterLinksPage(page);

  await loginPage.emailValido('andrezarafaella.xavier@gmail.com', 'Deza1985#');
  await loginPage.botaoEntrar();

  await social.openFacebook();
  await social.openTwitter();
  await social.openInstagram();
  await social.openYoutube();
  await page.waitForTimeout(3000);
  
  await footer.clickContato();
  await footer.clickCalendarioAcademico();
  await page.waitForTimeout(3000);
  await footer.clickMapaDoSite();
  await footer.clickValidacaoAssinaturas();
  
  await footer.validarAssinatura('123e4567-e89b-12d3-a456-426614174000');
  await footer.clickMinhaBiblioteca();
  await footer.clickAutoresParticipantes();
  await footer.clickMidia();
  
});