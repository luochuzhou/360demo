/**
 * Created by john zhou on 2017/4/29.
 */
requirejs.config({

    paths:{
        jquery:"jquery.min",
        jquery_fullpage:"jquery.fullPage.min"
    }

});

requirejs(['jquery','jquery_fullpage','init'],function($,fullpage,init){
    init.init();
});

