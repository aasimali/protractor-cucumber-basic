exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('./node_modules/protractor-cucumber-framework'),
    
 
  // require feature files
  specs: [
    './signup.feature'
  ],
 
  cucumberOpts: {
    require: [
      './signup_step.js',
      './env.js'
    ],
    format: 'pretty',
    keepAlive: false
  },

allScriptsTimeout: 18000,
  onPrepare: function() {
    browser.driver.manage().window().maximize();
     
  },
};


