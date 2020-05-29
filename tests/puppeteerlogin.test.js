describe('saucectl demo test', () => {

	test('Login Test', async () => {

		const page = (await browser.pages())[0]
		console.log('Starting login test now.')

		await page.goto('https://www.saucedemo.com/');

        console.log('Enter username')

		//await page.type('#user-name', process.env.GITHUB_USER)
		await page.type('#user-name', 'standard_user')
		await page.waitFor(4000)

		console.log('Enter password')
       // await page.type('#password', process.env.GITHUB_PWD)
        await page.type('#password', 'secret_sauce')
        await page.waitFor(4000)

        console.log('CLick login button')
        await page.click('#login_button_container > div > form > input.btn_action')
        await page.waitFor(4000)

        console.log('CLick on hamburger button')
        await page.click('#menu_button_container > div > div:nth-child(3) > div > button')
        await page.waitFor(4000)

        console.log('Perform Validation')

        console.log('CLick on logout link')
        await page.click('#logout_sidebar_link')
        await page.waitFor(4000)



	});
});
