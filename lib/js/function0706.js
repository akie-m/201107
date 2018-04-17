/*
*/
$(function(){
	//JSON読み込み
	$.getJSON("http://twitter.com/statuses/user_timeline/oyatsu_natalie.json?count=10&callback=?",function(data){
		
		//ループ表示
		$.each(data,function(i,items){
			var posted = items.created_at
			var txt = items.text
			.replace(/(http?:\/\/[-a-z0-9._~:\/?#@!$&amp;amp;amp;\'()*+,;=%]+)/ig,"<a href='$1' target='_blank'>$1</a>")
			.replace(/@+([_A-Za-z0-9-]+)/ig,"<a href='http://twitter.com/#!/$1' target='_blank'>@$1</a>")
			.replace(/#+([_A-Za-z0-9-]+)/ig,"<a href='http://search.twitter.com/search?q=$1' target='_blank'>#$1</a>");
			$("#twitter ul").append("<li><em>"+i+"個目</em> "+txt+"<p>"+posted+"</p></li><!--//つぶやきー-->\n");
		});
		
		$("#twitter ul li:nth-child(10)").fadeIn(500);
		setInterval (function(){
			$("#twitter ul li:last").fadeOut(500).prependTo("#twitter ul");
			$("#twitter ul li:last").fadeIn(500);
		},4000);
		
	});
});

