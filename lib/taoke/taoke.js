$(function(){
    $(document).ready(function(){
    	$.getJSON('/lib/taoke/taoke.json',function(data){
            var html = '';
            $.each(data,function(i,item){
                if($(".post-title").text().indexOf(item['key']) !== -1){
                    html += '<div class="shuji"><div class="shujitup"><a href="'+item['url']+'" target="_blank" >'+'<img src="'+item['img']+
                        '" alt="'+item['name']+'" /></a></div></div>'
                    ;
                }
            });
            var books = '<div class="tuijian"><p><font size="3" color="#8a2be2">提示：商品均为淘宝客推广商品，不为高佣金，只为性价比优，店铺服务好！</font></p>'+html+'</div>';
            $('#博主推荐').after(books);
        });
    });
});
