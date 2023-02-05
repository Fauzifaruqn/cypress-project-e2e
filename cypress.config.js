/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    baseUrl: "https://autobahn.security",
    specPattern: "**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 800,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  }
});
