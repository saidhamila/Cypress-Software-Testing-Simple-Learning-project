const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      on('task', {
        compareSnapshot: ({ name, html }) => {
          const snapshotsDir = path.join(__dirname, 'cypress', 'snapshots');
          const snapshotFile = path.join(snapshotsDir, `${name}.html`);
          
          if (!fs.existsSync(snapshotsDir)) {
            fs.mkdirSync(snapshotsDir, { recursive: true });
          }
          
          // Normalize HTML by removing dynamic content
          const normalizeHtml = (html) => {
            return html
              // Remove Next.js script tags with dynamic content
              .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
              // Remove Next.js data attributes and dynamic IDs
              .replace(/data-nextjs-[^=]+="[^"]*"/gi, '')
              .replace(/id="[^"]*"/gi, '')
              .replace(/class="[^"]*"/gi, '')
              // Remove timestamps and version numbers
              .replace(/v=\d+/g, '')
              .replace(/timestamp=\d+/g, '')
              // Normalize whitespace
              .replace(/\s+/g, ' ')
              .trim();
          };
          
          const normalizedHtml = normalizeHtml(html);
          
          if (fs.existsSync(snapshotFile)) {
            const existingHtml = fs.readFileSync(snapshotFile, 'utf8');
            const normalizedExistingHtml = normalizeHtml(existingHtml);
            
            if (normalizedExistingHtml === normalizedHtml) {
              return { match: true, message: 'Snapshot matches' };
            } else {
              // Create a diff file for debugging
              const diffFile = path.join(snapshotsDir, `${name}_diff.html`);
              fs.writeFileSync(diffFile, `<!-- NEW HTML -->\n${html}\n\n<!-- EXISTING HTML -->\n${existingHtml}`);
              return {
                match: false,
                message: 'Snapshot does not match. Check the diff file for details.',
                diffFile: diffFile
              };
            }
          } else {
            fs.writeFileSync(snapshotFile, html);
            return { match: true, message: 'New snapshot created' };
          }
        }
      });
      return config;
    },
  },
  video: false
});
