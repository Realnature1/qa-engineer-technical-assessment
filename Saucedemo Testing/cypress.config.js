module.exports = {
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    // video: false,
    // screenshotOnRunFailure: true,
    //defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
