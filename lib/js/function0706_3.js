/*
*/
$(function(){
				
		//var A = -200;
		//$("ul").clone().prependTo(".outerBox");
		
		//$("ul:first").css("top","-450px");
		
		setInterval (function(){
			
			var list01A = $("ul#list01").css("top");
			var list02A = $("ul#list02").css("top");
			var list01B = list01A.replace("px","");
			var list02B = list02A.replace("px","");
			var list01C = parseInt(list01B) + 50;
			var list02C = parseInt(list02B) + 50;
			
			if(list01C == 200){
				$("ul#list01").css("top","-350px");
			}
			if(list02C == 200){
				$("ul#list02").css("top","-350px");
			}
			
			//alert (list01C);
			//$("ul").css("top",C);
			
			$(".outerBox ul#list01:not(:animated)").animate({
				top: list01C
			},1000);
			$(".outerBox ul#list02:not(:animated)").animate({
				top: list02C
			},1000);

		},1000);

		
		
});

			//var listPlace = $("")css("top");
			//alert listPlace;
			//$(".outerBox ul li:not(:animated)").animate({
				//top: "0px"
			//},"normal","linear");	
