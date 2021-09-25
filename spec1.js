describe('Protractor Suite',function(){
	
	it('Open browser',function(){
		
		browser.get("https://angularjs.org/");
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function()
		{
			console.log("I am the last one to be exceuted");
		})
		
		
		
			
		
	})
	
	it('Close browser',function(){
		
		//protractor code to write tests
	})
	
})



