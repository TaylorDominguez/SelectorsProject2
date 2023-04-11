const CheckboxesPage = require('../pageobjects/checkboxes.page')


describe('My checkbox page', () => {
    it('should check and uncheck boxes', async () => {
        await CheckboxesPage.open()
        await CheckboxesPage.Check()
    })
})