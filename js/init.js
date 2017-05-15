/**
 * Created by john zhou on 2017/4/29.
 */
define(['jquery','jquery_fullpage'],function($,fullpage){
    return {
        init:function(){
            $("#dowebok").fullpage({
                sectionsColor:['#0da5d6','#2ab561','#de8910','#16ba9d','#0da5d6'],
                //滚动某一屏之后调用
                afterLoad:function(link,index){

                    //current类加给谁 谁就做动画

                    $(".section").removeClass("current");

                    //让动画 延迟执行100毫秒
                    setTimeout(function(){
                        $(".section").eq(index-1).addClass("current");
                    },100);
                }
            });
        }

    };
});