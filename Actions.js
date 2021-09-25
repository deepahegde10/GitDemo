describe("Actions Demo Suite",function(){
	it("Open Rahul Shetty website",function(){
		
		browser.waitForAngularEnabled(false);
		
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		browser.actions().mouseMove(element(by.id("autocomplete")).sendKeys("New")).perform();
		/*element(by.id("autocomplete")).click();
		element(by.id("autocomplete")).sendKeys("new");*/
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
		{
			
			browser.sleep(6000);
		})
		
		
	})
})
	
	

