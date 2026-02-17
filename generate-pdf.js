const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to A4 width
  await page.setViewport({
    width: 1200,
    height: 1697,
    deviceScaleFactor: 1.5
  });
  
  console.log('Loading website...');
  await page.goto('https://clara-web-phi.vercel.app', {
    waitUntil: 'networkidle0',
    timeout: 60000
  });
  
  // Wait for everything to load
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  console.log('Adding print-friendly CSS...');
  
  // Add CSS to prevent page breaks inside important elements
  await page.addStyleTag({
    content: `
      @media print {
        /* Prevent page breaks inside these elements */
        .grid, .bg-white, img, .rounded-2xl {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        /* Keep grid items together */
        .grid > div {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        /* Keep team member cards together */
        .hover-lift {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        
        /* Ensure images don't break */
        img, .aspect-square {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          max-width: 100% !important;
        }
        
        /* Reduce spacing between sections to fit more on one page */
        section {
          padding-top: 30px !important;
          padding-bottom: 30px !important;
          margin-bottom: 0 !important;
        }
        
        /* Allow sections to flow together */
        section#enroll {
          page-break-before: auto !important;
        }
        
        /* Hide fixed navigation for print */
        nav.fixed {
          display: none !important;
        }
        
        /* Reduce form spacing */
        form .space-y-8 > * + * {
          margin-top: 1.5rem !important;
        }
      }
    `
  });
  
  console.log('Generating PDF with proper page breaks...');
  
  await page.pdf({
    path: 'CLARA-website.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '12mm',
      right: '12mm',
      bottom: '12mm',
      left: '12mm'
    },
    displayHeaderFooter: false,
    preferCSSPageSize: false,
    scale: 0.7
  });
  
  console.log('PDF saved as CLARA-website.pdf');
  await browser.close();
})();
