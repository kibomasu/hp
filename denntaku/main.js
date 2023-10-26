console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");

	$("#my_btn").click(()=>{
		console.log("計算する");
		const strVal = $("#my_imput").val();//文字列取得
		const numVal = parseInt(strVal,);
		
		console.log("これを計算", numVal);
		//TODO電卓を完成させなさい

		const syouhi = numVal * 0.1
		const zeikomi = numVal + syouhi
		

		$("#my_tax").text(syouhi);
		$("#my_total").text(zeikomi);
        
	});
});