/*
*/
$(function(){
	
	/*
	$("ul.picList li:first img").css("display","block");
*/
	/*
	$(".switch01").click(function(){
		$("ul.picList li").css("display","none");
		$("ul.picList li:first").appendTo("ul.picList").css("display","block");
	});
*/	
	
	
	//$("ul.picList li").css("display","none");
	
	
	
	$("ul.picList li:first").fadeIn();
	setInterval (function(){
		$("ul.picList li:first").fadeOut(5000).appendTo("ul.picList");
		$("ul.picList li:first").fadeIn(5000);
	},10000);
});

