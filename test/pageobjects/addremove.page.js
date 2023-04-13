const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddRemovePage extends Page {
    /**
     * define selectors using getter methods
     */
    get AddEle () {
        return $('//*[@id="content"]/div/button')
    }

    get Elements () {
        return $('//*[@id="elements"]')
    }

    get Ele1 () {
        return $('//*[@id="elements"]/button[1]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async Add5Elements() {
        await this.AddEle.click();
        await this.AddEle.click();
        await this.AddEle.click();
        await this.AddEle.click();
        await this.AddEle.click();
        await browser.pause(1500)
    } 
    
    async Delete2Elements() {
        await this.Ele1.click()
        await this.Ele1.click()
        await browser.pause(1500)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new AddRemovePage();