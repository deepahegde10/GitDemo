describe("Synchronization Suite",function(){
	it("Element Visibility",function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://www.itgeared.com/demo/1506-ajax-loading.html");
				
		element(by.css("a[href*='loadAjax']")).click();
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.id("results"))),8000);			
		element(by.id("results")).getText().then(function(text){
			
			console.log(text);
			
		})			
		
		
	})
	
	
	
	
})



