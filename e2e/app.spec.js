const puppeteer = require('puppeteer');
const ui = process.env.UI || 'http://127.0.0.1';

it('h1 loads correctly', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(ui);
    await page.waitFor('.App');
    const html = await page.$eval('.App h1', e => e.innerHTML);
    expect(html).toBe('The Jenkins X Files');

    browser.close();
}, 16000);
    