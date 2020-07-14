
describe('saucectl login test', () => {
        test('playwright login test', async () => {
                await page.goto('https://www.saucedemo.com/');
                I.fillField('#user-name', 'standard_user')
                I.fillField('#password', 'secret_sauce')
                click('LOGIN', '#login_button_container > div > form > input.btn_action');
                
                
        });
});
