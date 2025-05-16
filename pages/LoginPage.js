class LoginPage{
    constructor(page){
        this.page = page;
    }

    async emailInvalido(email, senha){
        const campoEmail = await this.page.getByRole('textbox', { name: 'Email institucional' });
        await campoEmail.fill(email);

        const campoSenha = await this.page.getByRole('textbox', { name: 'Senha' });
        await campoSenha.fill(senha);

    }

    async botaoEntrar(){
        const botaoLogar = await this.page.getByRole('button', { name: 'Entrar' });
        await botaoLogar.click();
    }

    async emailValido(email, senha){
        const campoEmail = await this.page.getByRole('textbox', { name: 'Email institucional' });
        await campoEmail.fill(email);

        const campoSenha = await this.page.getByRole('textbox', { name: 'Senha' });
        await campoSenha.fill(senha);

    }
}

module.exports = LoginPage;