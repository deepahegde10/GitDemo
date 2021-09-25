describe("Frames Demo Suite",function(){
	it("Open Frame",function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		browser.driver.manage().window().maximize();
		browser.switchTo().frame("iframe-name");
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			
			console.log(text);
			
		})			
		
		
	})
	
	
	
	
})



