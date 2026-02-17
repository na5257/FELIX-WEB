#!/usr/bin/env node
const puppeteer = require('puppeteer');

// Configuration - easily customize for any project
const config = {
  // URL to generate PDF from (can be local or deployed)
  url: process.argv[2] || 'http://localhost:3000',
  
  // Output filename
  outputPath: process.argv[3] || 'website.pdf',
  
  // Viewport size
  width: 1200,
  height: 1697,
  
  // Scale (0.5 to 2.0) - smaller = more content per page
  scale: 0.7,
  
  // Margins (in mm)
  margins: {
    top: '12mm',
    right: '12mm',
    bottom: '12mm',
    left: '12mm'
  },
  
  // Wait time for page to load (in ms)
  waitTime: 4000
};

(async () => {
  console.log(`Generating PDF from: ${config.url}`);
  console.log(`Output: ${config.outputPath}`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  await page.setViewport({
    width: config.width,
    height: config.height,
    deviceScaleFactor: 1.5
  });
  
  console.log('Loading website...');
  await page.goto(config.url, {
    waitUntil: 'networkidle0',
    timeout: 60000
  });
  
  await new Promise(resolve => setTimeout(resolve, config.waitTime));
  
  console.log('Adding print-friendly CSS...');
  await page.addStyleTag({
    content: `
      @media print {
        /* Prevent page breaks inside these elements */
        .grid, .bg-white, img, .rounded-2xl {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        .grid > div {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        .hover-lift {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        img, .aspect-square {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          max-width: 100% !important;
        }
        
        section {
          padding-top: 30px !important;
          padding-bottom: 30px !important;
          margin-bottom: 0 !important;
        }
        
        section#enroll {
          page-break-before: auto !important;
        }
        
        nav.fixed, nav[class*="fixed"] {
          display: none !important;
        }
        
        form .space-y-8 > * + * {
          margin-top: 1.5rem !important;
        }
      }
    `
  });
  
  console.log('Generating PDF...');
  await page.pdf({
    path: config.outputPath,
    format: 'A4',
    printBackground: true,
    margin: config.margins,
    displayHeaderFooter: false,
    preferCSSPageSize: false,
    scale: config.scale
  });
  
  console.log(`✅ PDF saved as ${config.outputPath}`);
  await browser.close();
})();
