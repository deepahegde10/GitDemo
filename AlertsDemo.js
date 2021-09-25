describe("Alerts Demo Suite",function(){
	it("Open Alert",function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		element(by.id("name")).sendKeys("Deepa");
		element(by.id("alertbtn")).click();
		browser.switchTo().alert().getText().then(function(text){
			
			console.log(text);
		})
		
		
		
	})
	
	
	
	
})



