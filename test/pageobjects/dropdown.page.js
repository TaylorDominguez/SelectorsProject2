const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class dropdownPage extends Page {
    /**
     * define selectors using getter methods
    */
    
    get option1(){
        return $('/html/body/div[2]/div/div/select/option[2]')
    }
    
    get option2(){
        return $('/html/body/div[2]/div/div/select/option[3]')
    }

    /** 
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async selectOption1 () {
        await this.option1.click()
        await browser.pause(1000)
    }

    async selectOption2() {
        await this.option2.click()
        await browser.pause(1000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dropdown');
    }
}

module.exports = new dropdownPage();