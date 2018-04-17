$(function(){
	
	/*if(navigator.userAgent.indexOf("iPhone")!= -1){
		$("body").css("background-color","#ffcccc");
	}
	else if(navigator.userAgent.indexOf("Android")!= -1){
		$("body").css("background-color","blue");
	}*/

	
	/* ■UA判別 */
		//var txt = "";
	if(navigator.userAgent.indexOf("iPhone")!= -1){
		//txt = "iPhoneです";
		$("body").css("background-color","#ffcccc");
		$("p.msg").text("iPhoneです");
		//alert("iPhoneです");
	}
	else if(navigator.userAgent.indexOf("Android")!= -1){
		//txt = "Androidです";
		$("body").css("background-color","#ccffff");
		$("p.msg").text("Androidです");
		//alert("Androidです");
	}
	else {
		//txt = "その他のブラウザです";
		$("body").css("background-color","#ccffcc");
		$("p.msg").text("その他のブラウザです");
		//alert("その他のブラウザです");
	};
	//document.write(txt);
	
	
	/* ■回転 */
	//iPhone
	window.onorientationchange = function(){
		if(navigator.userAgent.indexOf("iPhone")!= -1){
			var brwidth = window.innerWidth;
			alert(brwidth);
		}
	}
	//Android
	/*window.onresize = function(){
		if(navigator.userAgent.indexOf("Android")!= -1){
			alert("ブラウザサイズ変更");
		}
	}*/
	
});
