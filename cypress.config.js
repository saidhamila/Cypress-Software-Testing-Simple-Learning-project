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
          
          if (fs.existsSync(snapshotFile)) {
            const existingHtml = fs.readFileSync(snapshotFile, 'utf8');
            if (existingHtml === html) {
              return { match: true, message: 'Snapshot matches' };
            } else {
              return { match: false, message: 'Snapshot does not match' };
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
