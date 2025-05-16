class CreatePDDPage {
    constructor(page) {
        this.page = page;
    }

    async botaoCreatePdd() {
        const botaoPdd = await this.page.getByRole('link', { name: 'PDD PDD Dashboard' });
        await botaoPdd.click();
    }

    async botaoNovoPdd() {
        const botaoNovo = await this.page.getByRole('link', { name: 'Novo PDD PDD' });
        await botaoNovo.click();
    }

    async botaoProximo() {
        const botaoProx = await this.page.getByRole('button', { name: 'Próximo' });
        await botaoProx.click();
    }

    async botaoConfirmar(){
        const botaoConfirme = await this.page.getByRole('button', { name: 'Confirmar' });
        await botaoConfirme.click();
    }

    async botaoVoltar(){
        const botaoReturn = await this.page.getByRole('link', { name: 'Voltar' });
        await botaoReturn.click();
    }
}

module.exports = CreatePDDPage;