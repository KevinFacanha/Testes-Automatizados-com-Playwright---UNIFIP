class SocialMediaPage {
    constructor(page) {
        this.page = page;
    }
    async openFacebook() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByRole('link', { name: 'Facebook' }).click(),
        ]);
                await newPage.waitForLoadState();
                console.log('Facebook:', newPage.url());
                await newPage.close();
    }

    async openTwitter() {
         const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByRole('link', { name: 'Twitter' }).click(),
        ]);
                await newPage.waitForLoadState();
                console.log('Twitter:', newPage.url());
                await newPage.close();
    }

    async openInstagram() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByRole('link', { name: 'Instagram' }).click(),
        ]);
                await newPage.waitForLoadState();
                console.log('Instagram:', newPage.url());
                await newPage.close();
    }

    async openYoutube() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByRole('link', { name: 'Youtube' }).click(),
        ]);
            await newPage.waitForLoadState();
            console.log('Youtube:', newPage.url());
            await newPage.close();
    }


}

module.exports = SocialMediaPage;

