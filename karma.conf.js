process.env.CHROME_BIN = require('puppeteer').executablePath()

let isCI = (process.env.CI !== undefined);
let browser = isCI ? 'ChromeHeadless' : 'Chrome';

module.exports = function(config) {
  config.set({
    browsers: [browser],
    frameworks: ['jasmine'],
    reporter: 'progress',
    files: [
      '*.js',
      '*.test.js',
      '*.fixture.html'
    ],
    singleRun: isCI
  })
}
