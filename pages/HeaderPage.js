class HeaderPage {
    constructor(page) {
        this.page = page;
    }

    async campoMenu() {
        const menuCampo = await this.page.locator('#mobile-menu');
        await menuCampo.click();
    }

    async botaoInicio() {
        const campoInicio = await this.page.getByRole('link', { name: ' Início' });
        await campoInicio.click();
    }

    async botaoPdd() {
        const campoPdd = await this.page.getByRole('link', { name: ' PDD ' });
        await campoPdd.click();
    }

    async botaoDashboardPdd(){
        const campoDasboard = await this.page.getByRole('link', { name: 'Dashboard PDD' });
        await campoDasboard.click();
    }

    async campoInicio() {
        const campoInicio = await this.page.getByRole('link', { name: 'Início', exact: true });
        await campoInicio.click();
    }


    async botaoDeslogar() {
        const campoDeslogar = await this.page.getByRole('link', { name: 'Profile ANDREZA' });
        await campoDeslogar.click();
    }

    async campoDeslogar() {
        const botaoDeslogar = await this.page.getByRole('link', { name: ' Sair' });
        await botaoDeslogar.click();
    }

}

module.exports = HeaderPage;