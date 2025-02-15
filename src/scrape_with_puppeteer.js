import puppeteer from 'puppeteer';
import axios from 'axios';
import { performOCR } from './ocr_with_tesseract.js';

async function scrapeImage(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.pwdimg');

    // Update username extraction to find the <strong> element that contains 'Username:' and extract the username
    const username = await page.evaluate(() => {
        const strongElements = Array.from(document.querySelectorAll('li strong'));
        const usernameElement = strongElements.find(el => el.textContent.includes('Username:'));
        return usernameElement ? usernameElement.textContent.replace('Username:', '').trim() : null;
    });

    const imageUrl = await page.evaluate(() => document.querySelector('.pwdimg').src);
    console.log(`Username : ${username}`);
    console.log(`Image URL: ${imageUrl}`);

    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    performOCR(imageBuffer);
    await browser.close();
}

const url = 'https://vpnbook.com';  // Replace with the target URL
scrapeImage(url);