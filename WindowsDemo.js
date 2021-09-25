describe("Windows Demo Suite",function(){
	it("Open Rahul Shetty website",function(){
		
		browser.waitForAngularEnabled(false);
		
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		element(by.id("openwindow")).click();
		browser.getAllWindowHandles().then(function(handles)
		{
			
			
			browser.switchTo().window(handles[1]);
			browser.getTitle().then(function(title)
			{
				
				console.log(title);
			})
			browser.switchTo().window(handles[0]);
		})
	})
})