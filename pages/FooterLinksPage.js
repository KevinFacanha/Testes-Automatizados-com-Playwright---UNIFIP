class FooterLinksPage {
  constructor(page) {
    this.page = page;
  }

  async clickContato() {
    await this.page.getByRole('link', { name: 'Contato' }).click();
  }

  async clickCalendarioAcademico() {
    await this.page.getByRole('link', { name: 'Calendário Academico' }).click();
  }

  async clickMapaDoSite() {
    await this.page.getByRole('link', { name: 'Mapa do Site' }).click();
  }

  async clickValidacaoAssinaturas() {
    await this.page.getByRole('link', { name: 'Validação de Assinaturas' }).click();
    await this.page.waitForSelector('input[placeholder*="xxxx"]');
  }

  async validarAssinatura(codigo) {
    await this.page.getByPlaceholder('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx').fill(codigo);

    await Promise.all([
    this.page.waitForSelector('text=Erro'), // espera o modal aparecer
    this.page.getByRole('button', { name: 'Validar' }).click(),
  ]);

  
    await this.page.getByRole('button', { name: 'Confirmar' }).click();

  
     await this.page.waitForSelector('text=Erro', { state: 'detached' });
}

  async clickMinhaBiblioteca() {
  try {
    await this.page.getByRole('link', { name: 'Minha Biblioteca' }).click();
    await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 }); 
    console.log('URL atual:', this.page.url());
  } catch (error) {
    console.error('Erro ao acessar Minha Biblioteca:', error);
  }
}

  async clickAutoresParticipantes() {
    await this.page.getByRole('link', { name: 'Autores && Participantes' }).click();
  }

  async clickMidia() {
    await this.page.getByRole('link', { name: 'Midia' }).click();
  }
}

module.exports = FooterLinksPage;
