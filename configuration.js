var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
//seleniumAddress : 'http://localhost:4444/wd/hub',

    specs: ['ElementBasics.js'],
       
    onPrepare : function()
	{
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
	},
	
	suites:
	{
	Smoke:['ChainLocators.js','AlertsDemo.js'],
	//if we have only one file--no need of square brackets
	Regression:'ElementBasics.js'
	
	},
	jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
	/*capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      w3c: false
     }};*/
};