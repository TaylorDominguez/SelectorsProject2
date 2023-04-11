const DropdownPage = require('../pageobjects/dropdown.page')


describe('My dropdown page', () => {
    it('should select option 1', async () => {
        await DropdownPage.open()
        await DropdownPage.selectOption1()
        await expect(DropdownPage.option1).toBeSelected()
    })
})