/*
*/
$(function(){
	//setInterval (function(){
	//	$("li:first").appendTo("ul");
	//},1000);
	
	
	$("#clicklink").click(function(){
		//$(this).css("color","red");
		$("li:first").appendTo("ul");
	});
	
	/*　
	 * 
	 *20110704	タブ切り替え
	 *
	 */
	$("li").click(function(){
		$("li").css("background","#f0f0f0");
		$(".tabContent").css("height","200px");
	});
	
	$("#tabA").click(function(){
		$("div#A").css("display","block");
		$("div#B").css("display","none");
		$("div#C").css("display","none");
		$(this).css("background","#ffcccc");
	});

	$("#tabB").click(function(){
		$("div#B").css("display","block");
		$("div#A").css("display","none");
		$("div#C").css("display","none");
		$(this).css("background","#ffffcc");
	});
	
	$("#tabC").click(function(){
		$("div#C").css("display","block");
		$("div#A").css("display","none");
		$("div#B").css("display","none");
		$(this).css("background","#ccccff");
	});
	
	$(".tabContent").click(function(){
		//$(this).css("height","400px");
		
		if($(this).css("height")=="200px"){
			$(this,":not(:animated)").animate({
				height: "600px"
			},"normal","swing");
		}else{
			$(this,".tabContent:not(:animated)").animate({
				height: "200px"
			},"normal","linear");			
		}
	});

	/*
$("#aLink").click(function(){
		$("div#A:not(:animated)").animate({
			height: "400px"
		},"fast","swing");
		$("#aLink").attr("id","aLinkClicked");
	});
	$("#aLinkClicked").click(function(){
		$("div#A:not(:animated)").animate({
			height: "200px"
		},"fast","swing");
		$("#aLinkClicked").attr("id","aLink");
	});
	
	$("#bLink").click(function(){
		$("div#B:not(:animated)").animate({
			height: "400px"
		},"fast","swing");
	});
	$("#cLink").click(function(){
		$("div#C:not(:animated)").animate({
			height: "400px"
		},"fast","swing");
	});
*/
	
	//$(".tabContent .widelink").click(function(){
	//	$(this).find(".tabContent").css("height","200px");
	//});
});

