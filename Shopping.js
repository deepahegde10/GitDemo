describe("Shopping Suite",function(){
	function addToCart(productName)
	{
			element.all(by.tagName("app-card")).each(function(item){
			//console.log("Getting product name");
			item.element(by.css("h4 a")).getText().then(function(text){				
				if(text==productName)
				{
					//console.log("add");
					item.element(by.css("button[class='btn btn-info']")).click();
				}
			})
			
		})
	}
	it("Submit form",function(){


		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("Deepa");
		element(by.css("input[name='email']")).sendKeys("deepahegde10@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("abcd");
		element(by.id("exampleCheck1")).click();
		
		//dropdown --where we have multiple options -use CssContainingText
		element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female")).click();
		
		//for multiple elements with same value/property
		
		element.all(by.name("inlineRadioOptions")).first().click();
		
		//using buttonText
		element.all(by.css("div[class='alert alert-danger']")).count().then(function(count){
			
			console.log(count);
			if(count==0)
			{
				element(by.buttonText("Submit")).click().then(function(){			
					element(by.css("div[class*='alert-success']")).getText().then(function(text){
						console.log(text);			
					})
				})
			}
				
		})
		
		
		
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M");
		element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
		
			console.log(text);
		})
		
		element(by.css("a[href*='shop']")).click();
		addToCart("Nokia Edge");
		addToCart("iphone X");
		addToCart("Samsung Note 8");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			
			console.log(text);
			
			var c=text.split("(");
			var cartCount=Number(c[1].trim().charAt(0));
			expect(c[1].trim().charAt(0)).toBe("3");
				
		})
		
		element(by.partialLinkText("Checkout")).click();
		element.all(by.css("td:nth-child(4) strong")).count().then(function(count){
			console.log("Total items in cart : "+count);
		})
		//calculate price
		var price=0;
		element.all(by.css("td:nth-child(4) strong")).each(function(item1){
			item1.getText().then(function(text1){
				var splitText=text1.split(".");
				price=price+Number(splitText[1].trim());
				console.log("Actual Price : " +price);
			})
		})
				element(by.css("h3 strong")).getText().then(function(text){
			console.log("Expected price : "+Number(text.split(".")[1].trim()));	
			
		})
		
		element.all(by.css("tbody tr")).each(function(row){
			row.element(by.css("td:nth-child(1)")).element(by.css("h4[class='media-heading'] a")).getText().then(function(text){
					
					if(text=="Samsung Note 8")
					{
						row.element(by.css("button[class='btn btn-danger']")).click();
					}
					
				})
				
			
		
		})
		
		
	})
})