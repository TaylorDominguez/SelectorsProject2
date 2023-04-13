const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkbox1(){
        return $('//form/input[1]');
    }

    get checkbox2(){
        return $('//form/input[2]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async Check () {
        await browser.pause(1000)
        await this.checkbox1.click();
        await this.checkbox2.click();
        await browser.pause(1000)
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();