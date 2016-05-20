/**
 * Created by Administrator on 2016/4/22.
 */
//QQ跳转
//function qqhref(){
//    var qq=document.write( 'a1b4c8d0e5f6g8h7iff8uii'.replace(/\D/g, '') );
//    var href='tencent://message/?uin='+qq+'Site=&Menu=yes'
//    window.open(href)
//}
//电话密码base64加密
// console.log(window.btoa('(+86)18611605689'))
function phonenumberencryption(){
if (window.atob) { document.write( window.atob('KCs4NikxODYxMTYwNTY4OQ==') ); }
if ( /[?&]show-phone-number(&|$)/.test(window.location.search) ) {
    document.getElementById('header__address__item-phone').style.display = 'block';
}}
//edulogo旋转效果及指针移入旋转
var y,ny= 0;
function rotateYDIV(){
    //document.getElementById("rotatey1").style.cssText = ""
    function rander(){
        y=document.getElementById("rotatey1");
        ny=ny+6;
        y.style.transform = "rotateY(" + ny + "deg)";
    }
    requestAnimationFrame(function(){
        rander();
         if(ny<=360)
         {
             requestAnimationFrame(arguments.callee);
         }else
         {
             ny=0;
         }
    });
    }
//指针滚动窗口中间加载事件
$(window).scroll(function () {
    if ($(window).scrollTop() == parseInt($(window).height()/200)*100) {
        rotateYDIV()
    }
});
$(document).ready(function(){
    var t=$(".main_system").find(".item_list");
    t.on("mouseenter", "a", function() {
        var t = $(this).find("img");
        t.attr("src", t.data("hover"));
            $(this).find("span").addClass("span_active")
    });
        t.on("mouseleave", "a", function() {
            var t = $(this).find("img");
            t.attr("src", t.data("origin"));
                $(this).find("span").removeClass("span_active")
        });
});