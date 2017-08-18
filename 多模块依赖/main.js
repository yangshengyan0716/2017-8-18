/**
 * 主要出口函数
 */  
require.config({
    baseUrl:"js",

    paths:{
        
    },
    shim:{
        bootstrap:{
            daps:["jquery"]
        }
    }
});

require(["./js/teacherMain"], function (teacherMain) {
       var btnTeacher = document.getElementById("btnTeacher");
       btnTeacher.onclick = function(){
           teacherMain();
       }
    });