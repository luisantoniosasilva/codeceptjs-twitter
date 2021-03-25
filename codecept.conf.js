exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://twitter.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    loginTwitterPage: './pages/loginTwitter.js'
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output'
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    },
    allure: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'project'
}