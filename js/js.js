/**
 * Created by Administrator on 2016/4/22.
 */
//电话密码base64加密
// console.log(window.btoa('(+86)18611605689'))
function phonenumberencryption(){
if (window.atob) { document.write( window.atob('KCs4NikxODYxMTYwNTY4OQ==') ); }
if ( /[?&]show-phone-number=true(&|$)/.test(window.location.search) ) {
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
