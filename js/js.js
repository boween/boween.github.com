/**
 * Created by Administrator on 2016/4/22.
 */

//var y,ny=0,rotYINT
//function rotateYDIV()
//{
//    y=document.getElementById("rotatey1")
//    clearInterval(rotYINT)
//    rotYINT=setInterval("startYRotate()",50/3)
//}
//function startYRotate()
//{
//    ny=ny+6
//    console.log(ny)
//    y.style.transform="rotateY("+ny+"deg)"
//            y.style.webkitTransform="rotateY(" + ny + "deg)"
//            y.style.OTransform="rotateY(" + ny + "deg)"
//            y.style.MozTransform="rotateY(" + ny + "deg)"
//    if (ny==360 || ny>=360)
//    {
//        clearInterval(rotYINT)
//        if (ny>=360){ny=0}
//
//    }
//}


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
