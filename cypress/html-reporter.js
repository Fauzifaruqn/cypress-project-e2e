const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress/cucumber-report/",
  displayDuration:true,
  metadata:{
    browser: {
        name: 'chrome',
        version: '100'
    },
    device: 'PC',
    platform: {
        name: 'ubuntu',
        version: 'latest'
    }
  }
});
