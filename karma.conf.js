process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({
    basePath: './',
    // browsers: ['ChromeHeadless'],
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporter: 'progress',
    files: [
      '*.js',
      '*.test.js',
      '*.fixture.html'
    ]
  })
}
