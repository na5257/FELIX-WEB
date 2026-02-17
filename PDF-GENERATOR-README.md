# PDF Generator Script

A reusable script to generate high-quality PDFs from any website.

## Quick Start

### 1. Copy to your project
```bash
cp generate-pdf-reusable.js /path/to/your-project/
```

### 2. Install Puppeteer
```bash
cd /path/to/your-project
npm install puppeteer
```

### 3. Run it

**Basic usage (uses defaults):**
```bash
node generate-pdf-reusable.js
```

**With custom URL:**
```bash
node generate-pdf-reusable.js https://your-website.com
```

**With custom URL and filename:**
```bash
node generate-pdf-reusable.js https://your-website.com my-site.pdf
```

**For local development:**
```bash
# Start your dev server first
npm run dev

# Then in another terminal
node generate-pdf-reusable.js http://localhost:3000 my-local-site.pdf
```

## Customization

Open `generate-pdf-reusable.js` and edit the `config` object:

```javascript
const config = {
  url: 'http://localhost:3000',    // Your website URL
  outputPath: 'website.pdf',        // Output filename
  width: 1200,                      // Viewport width
  height: 1697,                     // Viewport height
  scale: 0.7,                       // Scale (0.5-2.0, smaller = more content)
  margins: {
    top: '12mm',
    right: '12mm',
    bottom: '12mm',
    left: '12mm'
  },
  waitTime: 4000                    // Wait time for page load (ms)
};
```

## Tips

- **Scale**: Adjust between 0.5 (very small) to 2.0 (very large)
  - 0.7 = fits more content per page
  - 1.0 = normal size
  
- **Wait time**: Increase if your site has slow-loading images/fonts
  
- **Custom CSS**: Edit the `page.addStyleTag()` section to add site-specific print styles

## Examples

```bash
# Generate from production site
node generate-pdf-reusable.js https://clara-web-phi.vercel.app clara.pdf

# Generate from local dev
node generate-pdf-reusable.js http://localhost:3000 local-preview.pdf

# Generate with default settings
node generate-pdf-reusable.js
```

## What It Does

✅ Generates multi-page A4 PDF  
✅ Preserves all colors and backgrounds  
✅ Prevents images from being cut in half  
✅ Hides fixed navigation bars  
✅ Keeps content sections together  
✅ High-quality output (1.5x device scale)

## Requirements

- Node.js
- npm or yarn
- puppeteer package

## Created for CLARA project
Feel free to use and modify for any project!
