$(function(){
	$('aside').hide();  //侧边栏
	$('.meau-gotop-box').hide();  //
	$('.pulllog-box').hide();
	$('.bdsharebuttonbox _360_interactive').hide();
	$('.recommend-download-box').hide();  //文章底部阅读建议屏蔽广告
	document.getElementById("btn-readmore").click();  // 自动点击“阅读更多”
  console.log('已自动关闭无关项');
})