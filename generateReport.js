const report = require('multiple-cucumber-html-reporter');
const fs = require('fs-extra');

fs.removeSync('reports/html');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'XX'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: 'XX'
    }
  }
});