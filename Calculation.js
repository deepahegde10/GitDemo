describe("Calculation", function(){
	function calc(a,b,c)
	{
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("8");
		element.all(by.tagName("option")).each(function(item)
		{
			item.getAttribute("value").then(function(value)
			{
				if(value==c)
				{
					item.click();
				}
			})
			
		})
		element(by.id("gobutton")).click();
	}
	
	
	it("Multiple operators",function()
	{
		browser.get('http://juliemr.github.io/protractor-demo/');
		calc(5,3,"MULTIPLICATION");
		calc(5,3,"DIVISION");
		calc(5,3,"ADDITION");
		element.all(by.repeater("result in memory")).each(function(item)
		{
				item.element(by.css("td:nth-child(3)")).getText().then(function(text)
				{

				console.log(text);	
				})
		})
	
	})
	
})


