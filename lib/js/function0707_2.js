$(function(){
	//var userWidth = document.documentElement.clientWidth;
	//alert(userWidth);
	//$(".bgBoxOuter").css("width",userWidth);
	
	setInterval (function(){
		//$(".boxA").css("background-position","50% 80%");
		$(".boxA:not(:animated)").animate({
			backgroundPosition: "70%"
		},3000);
	},3000);
	
	/*
setInterval (function(){
		$(".img_a").animate({
			marginTop: "-400px"
		},10000);
	},100);
	
	setInterval (function(){
		$(".img_b").animate({
			marginLeft: "-250px"
		},10000);
	},100);
*/


		$("img.img_a:not(:animated)").animate({
			opacity: "1",
			marginTop: "-250px"
		},5000);


	//$("img.bgImg:first").fadeIn(5000);
	//setInterval (function(){
		//$("img.bgImg:first").fadeOut(5000).appendTo(".bgBoxOuter");

		//var imgId = $(".bgBoxOuter img").attr("id");
		//alert(imgId);
		/*
		if(imgId == "img_a"){
			$(".img_a").animate({
				marginTop: "-400px"
			},10000);
		};
*/		

		
		

		//$("img.bgImg:first").fadeIn(5000);
		
	//},5000);
	

});
