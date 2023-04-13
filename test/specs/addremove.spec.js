const AddRemovePage = require('../pageobjects/addremove.page')


describe('My add/remove elements page', () => {
    it('should create 5 then delete 2 elements', async () => {
        await AddRemovePage.open()
        await AddRemovePage.Add5Elements()
        await expect(AddRemovePage.Elements).toHaveChildren(5)
        await AddRemovePage.Delete2Elements()
        await expect(AddRemovePage.Elements).toHaveChildren(3)
    })
})