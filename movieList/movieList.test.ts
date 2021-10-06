import {Builder, Capabilities, By} from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/index.html')
});

afterAll(async () => {
    await driver.quit()
});

test('Add Movie', async () => {
    let form = await driver.findElement(By.id('add'))
        await form.sendKeys('Interstellar\n')

        await driver.sleep(5000)
});