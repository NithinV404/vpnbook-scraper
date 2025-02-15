import Tesseract from 'tesseract.js';
import fs from 'fs';

export async function performOCR(imageSource) {

    const imageBuffer = Buffer.isBuffer(imageSource) ? imageSource : fs.readFileSync(imageSource);

    try {
        const { data: { text } } = await Tesseract.recognize(imageBuffer, 'eng', {
            logger: m => console.log(m)
        });
        console.log(`Recognized Text: ${text}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

