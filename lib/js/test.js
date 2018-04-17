$(function(){
	setInterval (function(){
 
		var list01A = $("ul#list01").css("top");
		var list01B = list01A.replace("px","");
		var list01C = parseInt(list01B) + 50;
		
		var list02A = $("ul#list02").css("top");
		var list02B = list02A.replace("px","");
		var list02C = parseInt(list02B) + 50;
	   
		if(list01C > 200){
			$("ul#list01").css("top", -250);
			list01A = "";
			list01B = "";
			list01C = "";
						
			$(".outerBox ul#list02:not(:animated)").animate({
				top: list02C
			},1000);  	
		}
		else if(list02C > 200){
			$("ul#list02").css("top", -250);
			list02A = "";
			list02B = "";
			list02C = "";
			$(".outerBox ul#list01:not(:animated)").animate({
				top: list01C
			},1000);
		}
		else{
	   
			$(".outerBox ul#list01:not(:animated)").animate({
				top: list01C
			},1000);
			
			$(".outerBox ul#list02:not(:animated)").animate({
				top: list02C
			},1000);  	
		}
	
	},2000);   

  
  
});