class SearchBarPage {
  constructor(page) {
    this.page = page;
  }

      async botaoPDD(){
        const botaoDashboard = await this.page.getByRole('link', { name: 'PDD PDD Dashboard' });
        await botaoDashboard.click();
      }

      async botaoPesquisar(){
        const botaoPesquisa = await this.page.getByRole('listitem', { name: 'Pesquisar' });
        await botaoPesquisa.click();
      }
      
      async selecionarCurso(){
        const botaoCurso = await this.page.getByLabel('Curso');
        await botaoCurso.selectOption({ label: 'CURSO DOIS' });
      }

      async selecionarDisciplina() {
        const botaoDisciplina = await this.page.getByRole('dialog', { name: 'Pesquisar' }).getByLabel('Disciplina');
        await botaoDisciplina.selectOption({ label: 'DISCIPLINA OITO' });
      }

        async nomeTutor(nome){
        const campoTutor = await this.page.getByRole('textbox', { name: 'Nome completo do tutor' });
        await campoTutor.fill(nome);
    }

        async selecionarSemestre() {
        const botaoSemestre = await this.page.getByRole('dialog', { name: 'Pesquisar' }).getByLabel('Semestre');
        await botaoSemestre.selectOption({ label: '2024.2' });
      }

      async setCargaHoraria(valor) {
        const cargaHorariaInput = this.page.getByRole('spinbutton', { name: 'Carga Horária' });
        await cargaHorariaInput.fill('');
        await cargaHorariaInput.fill(valor.toString());
      }

      async selecionarStatus(){
        const botaoStatus = await this.page.getByLabel('Status do PDD');
        await botaoStatus.selectOption({ label: 'Correção' });
      }

      async selecionarBuscar() {
        const botaoBuscar = await this.page.getByRole('button', { name: 'Buscar' });
        await botaoBuscar.click();  
      }

      async selecionarConfirmar() {
        const botaoConfirmar = await this.page.getByRole('button', { name: 'Confirmar' });
        await botaoConfirmar.click();
      }
}

module.exports = SearchBarPage;