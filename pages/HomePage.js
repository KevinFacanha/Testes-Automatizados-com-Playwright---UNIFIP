class HomePage{
    constructor(page){
        this.page = page
    }

    async botaoPDD(){
        const botao = await this.page.getByRole('link', { name: 'PDD PDD Dashboard' });
        await botao.click();
    }

    async botaoVisualizarArquivo(){
        const botaoArq = await this.page.getByRole('link', { name: 'arquivo' });
        await botaoArq.click();
    }

    async botaoIncompleto(){
        const botaoInc = await this.page.getByRole('link', { name: 'Incompleto' });
        await botaoInc.click(); 
    }

    async botaoVoltarPDD(){
        const botaoVoltar = await this.page.getByRole('link', { name: 'Voltar' });
        await botaoVoltar.click();
    }

    async botaoDelete(){
        const botaoDeletar = await this.page.getByTitle('Deletar');
        await botaoDeletar.click();
    }

    async botaoConfirme(){
        const botaoDelete = await this.page.getByRole('checkbox', { name: 'Confirme' });
        await botaoDelete.click();
    }

    async botaoAceitar(){
        const botaoConfirm = await this.page.getByRole('button', { name: 'Aceitar' });
        await botaoConfirm.click();
    }
    
}

module.exports = HomePage;

