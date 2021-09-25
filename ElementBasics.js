describe('Element Basics Suite',function(){
	var cal=require("./Page_Calculator.js");
	var using = require('jasmine-data-provider');
	var objectDataProvider=require("./data.js");
	beforeEach(function(){
			console.log("Before excecuting test method");
			cal.getURL();
	})
	//data stores actual data
	//description stores subobject name
	using(objectDataProvider.DataDriven,function(data,description){
	it('Get first Calculator result '+description,function(){
		//browser.waitForAngularEnabled(false)			
	
		cal.firstInput.sendKeys(data.firstInput);
		cal.secondInput.sendKeys(data.secondInput);
		cal.goButton.click();
		
		expect(cal.result.getText()).toBe(data.result);
		
		cal.result.getText().then(function(text){
			
			console.log(text);
		})
		
		
		})
		
	})	
		afterEach(function(){
			console.log("After excecuting test method");
		})
			
		
	})
	
	



