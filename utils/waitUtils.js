export class waitUtils
{
    constructor(page)
    {
        this.page = page;
    }

    async waitForElementVisible(locator)
    {
        await locator.waitFor({state:'visible'});// this function will return the promis or void.
    }

    async waitForElementHidden(locator)
    {
        await locator.waitFor({state :'hidden'});
    }
    // attached

    //detached
}