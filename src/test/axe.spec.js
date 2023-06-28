const AxeBuilder = require('@axe-core/webdriverio').default;

describe('Accessibility Test', () => {
    it('should get the accessibility results from a page', async () => {
        const fs = require('fs');
        const builder = new AxeBuilder({ client: browser })
			
        await browser.url('https://sainsburysbank.co.uk')
        const result = await builder.analyze()
        let data = JSON.stringify(result);
        // console.log('got', result)
        fs.writeFileSync("results.json", data, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });
    });
});