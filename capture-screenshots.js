const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  // 1. Homepage - top
  console.log('Navigating to homepage...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-homepage-top.png', fullPage: false });
  console.log('✓ Captured: screenshot-homepage-top.png');
  
  // 2. Homepage - scrolled down
  console.log('Scrolling down homepage...');
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(500); // Wait for scroll to complete
  await page.screenshot({ path: 'screenshot-homepage-scrolled.png', fullPage: false });
  console.log('✓ Captured: screenshot-homepage-scrolled.png');
  
  // 3. About page
  console.log('Navigating to /about...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-about.png', fullPage: false });
  console.log('✓ Captured: screenshot-about.png');
  
  // 4. Science page
  console.log('Navigating to /science...');
  await page.goto('http://localhost:3000/science', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-science.png', fullPage: false });
  console.log('✓ Captured: screenshot-science.png');
  
  await browser.close();
  console.log('\n✓ All screenshots captured successfully!');
})();
