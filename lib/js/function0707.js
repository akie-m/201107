$(function(){
	
	//JSON読み込み
	$.getJSON("http://twitter.com/statuses/user_timeline/autumn_k.json?count=5&callback=?",function(data){
		
		//ループ表示
		$.each(data,function(i,items){
			//var posted = items.created_at;
			var txt = items.text
			.replace(/(http?:\/\/[-a-z0-9._~:\/?#@!$&amp;amp;amp;\'()*+,;=%]+)/ig,"<a href='$1' target='_blank'>$1</a>")
			.replace(/@+([_A-Za-z0-9-]+)/ig,"<a href='http://twitter.com/#!/$1' target='_blank'>@$1</a>")
			.replace(/#+([_A-Za-z0-9-]+)/ig,"<a href='http://search.twitter.com/search?q=$1' target='_blank'>#$1</a>");
			
			//投稿時刻
				// 日時データを要素分解
				var created_at = items.created_at.split(" ");
				// 投稿日時変換 "Mon Dec 01 14:24:26 +0000 2008" -> "Dec 01, 2008 14:24:26"
				var post_date  = created_at[1] + " "
				               + created_at[2] + ", "
				               + created_at[5] + " "
				               + created_at[3];
				// 日時データ処理
				var date = new Date(post_date);     // 日付文字列 -> オブジェクト変換
				date.setHours(date.getHours() + 9); // UTC -> JST (+9時間)
				var year  = date.getFullYear();     // 年取得
				var mon  = date.getMonth() + 1;     // 月取得
				var day  = date.getDate();          // 日取得
				var time1  = date.getHours();          // 時取得
				var time2  = date.getMinutes();          // 分取得
				var time3  = date.getSeconds();          // 秒取得
				

			var posted = year+"/"+mon+"/"+day+"　"+time1+"："+time2+"："+time3;
						
			$("ul.twiloop").prepend("<li><em>"+i+"個目</em> "+txt+"<p>"+posted+"</p></li><!--//つぶやきー-->\n");
		});
	});
	
	$("ul.twiloop").clone().appendTo(".outerBox").attr("id","list02");
		
	setInterval (function(){
		
		var list01A = $("ul#list01").css("top");
		var list01B = list01A.replace("px","");
		var list01C = parseInt(list01B) + 50;
		
		var list02A = $("ul#list02").css("top");
		var list02B = list02A.replace("px","");
		var list02C = parseInt(list02B) + 50;
		
		if (list01C > 200) {
			$("ul#list01").css("top", -250);
			list01A = "";
			list01B = "";
			list01C = "";				
			$(".outerBox ul#list02:not(:animated)").animate({
				top: list02C
			}, 1000);
		}
		else if (list02C > 200) {
			$("ul#list02").css("top", -250);
			list02A = "";
			list02B = "";
			list02C = "";
			$(".outerBox ul#list01:not(:animated)").animate({
				top: list01C
			}, 1000);
		}
		else {			
			$(".outerBox ul#list01:not(:animated)").animate({
				top: list01C
			}, 1000);
			$(".outerBox ul#list02:not(:animated)").animate({
				top: list02C
			}, 1000);
		}

	},2000);
	
});
