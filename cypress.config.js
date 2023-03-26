import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: false,
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
