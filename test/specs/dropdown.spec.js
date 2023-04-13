const dropdownPage = require('../pageobjects/dropdown.page')

describe('My dropdown page', () => {
    it('should select option 1', async () => {
        await dropdownPage.open()
        await dropdownPage.selectOption1()
        await expect(dropdownPage.option1).toBeSelected()
    })
    it('should select option 2', async () => {
        await dropdownPage.open()
        await dropdownPage.selectOption2()
        await expect(dropdownPage.option2).toBeSelected()
    })
})