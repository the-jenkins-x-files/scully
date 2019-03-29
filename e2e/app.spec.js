const puppeteer = require('puppeteer');
const ui = process.env.UI || 'http://127.0.0.1:3000';

describe("App test", () => {
    let browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            timeout: 30000,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }, 30000);

    it('h1 loads correctly', async () => {
        const page = await browser.newPage();
        await page.goto(ui);
        await page.waitFor('.App');
        const html = await page.$eval('.App h1', e => e.innerHTML);
        expect(html).toBe('The Jenkins X Files version 1.1');
        page.close();
    }, 16000);

    it('Click and call api', async () => {
        const page = await browser.newPage();
        await page.goto(ui);
        await page.waitFor('.App');
        await page.click('.App-bulle')
        await page.waitFor(() => document.querySelector('.App-quote').innerText !== '...');
        const quote = await page.$eval('.App-quote', e => e.innerHTML);
        console.log(quote);
        expect(quote).toContain('Mulder says');
        page.close();
    }, 16000);

    afterAll(() => {
        browser.close();
    });
});
    