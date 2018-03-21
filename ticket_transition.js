
//换届时间（开展前一天）
// 给展示展会时间地址的标签添加 class="min_time" 属性
transEx({
	exType:exType,										//展会类型，0：大展（婚品展）；1：家装展；2：小展
	time:[
		{start:"2018/03/11 12:00:00",end:"2018/03/21 20:00:00"},
		{start:"2018/03/11 12:00:00",end:"2018/03/11 20:00:00"},
		{start:"2018/03/11 12:00:00",end:"2018/03/11 20:00:00"}
	],															// start:当前展会索票截止时间（弹框显示）,end:下届展会索票开始时间（弹框隐藏）
	curAddr:"-杭州国际博览中心 3月10-11日-",					// curAddr:当前展会的时间地址
	nxtAddr:"-杭州国际博览中心 6月23-24日-",					// nxtAddr:下一届展会的时间地址
	// 弹框内容
	exTime:"03月10日（9:30-20:00）、03月11日（9:30-19:30）",	//开展时间
	tel:"0571-28198800",										//现场客服电话
	price:"15元/位",											//票价
	nxtExNote:"2018夏季<span>中国婚博会</span>将于6月23日-24日在杭州国际博览中心隆重召开！" //下届展会信息
});

function transEx(obj){
	if(location.href.indexOf("edit")===-1){
		var html='<div class="pop-box"><div class="expo_tc" style=""><h3>索票已截止。请到现场买票入场（'+obj.price+'）。</h3><p>①开展时间：'+obj.exTime+'。</p><p>②本展会为会员制，须出示身份证买票入场。</p><p>现场客服：'+obj.tel+'</p><p>'+obj.nxtExNote+'</p><div class="tc_close">X</div><div class="go_next">前往索取下届展会门票</div></div></div>';
		var css='html{height:100%;}body{height:100%}.pop-box{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,0.5)}.expo_tc{width:600px;overflow:hidden;border:solid red 1px;text-align:center;position:fixed;padding:10px;font-size:20px;background:#fff;z-index:9999;}.expo_tc h3{margin-bottom:10px}.tc_close{position:absolute;right:10px;top:0;font-size:20px;cursor:pointer}.go_next{width:400px;height:40px;line-height:40px;background:red;color:#fff;text-align:center;margin:10px auto;cursor:pointer}@media screen and (max-width:1024px){.expo_tc{width:15rem;overflow:hidden;border:solid red 1px;text-align:center;position:fixed;padding:.25rem;font-size:.5rem;background:#fff;z-index:9999;margin-left:-.25rem}.expo_tc h3{margin-bottom:.25rem}.tc_close{position:absolute;right:.25rem;top:0;font-size:.5rem}.go_next{width:10rem;height:1rem;line-height:1rem;background:red;color:#fff;text-align:center;margin:.25rem auto}}.expo_tc span{color:red;display:inline-block}';
	    $("body").append(html);
	    $("body").append("<style>"+css+"</style>");
	    var popout=$(".pop-box");
	    // 需要更换展会时间地址的标签
	    var addrBox=$('.min_time');

	    var start=new Date(obj.time[obj.exType].start).getTime();
    	var end=new Date(obj.time[obj.exType].end).getTime();
    	var now=new Date().getTime();
    	var Top = ($(window).height()-$('.expo_tc').height())/2;
    	var Left = ($(window).width()-$('.expo_tc').width())/2;

    	popout.children(".expo_tc").css({'top':Top,'left':Left});

	    //点击关闭弹窗
		$('.tc_close,.go_next').click(function(){
      		popout.hide();
    	})

		// 换届逻辑
    	now-start>0?addrBox.text(obj.nxtAddr):addrBox.text(obj.curAddr);
    	now - start > 0 && now - end <0 && popout.show();
    }
}
