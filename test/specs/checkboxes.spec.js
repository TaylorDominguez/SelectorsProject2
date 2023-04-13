const CheckboxesPage = require('../pageobjects/checkboxes.page')


describe('My checkbox page', () => {
    it('should only have checkbox1 checked', async () => {
        await CheckboxesPage.open()
        await CheckboxesPage.Check()
        await expect(CheckboxesPage.checkbox1).toBeSelected()
    })
})