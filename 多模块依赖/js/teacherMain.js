/**
 * 教师管理系统
 */
define(["./teacherAdd"],function(teacherAdd){
    return function(){
        // 渲染出讲师列表
        var str = "<div class='teacher-container'>" +
              "讲师功能：" +
              "<input type='button' value='添加讲师' id='btnAddTeacher'>" +
              "<input type='button' value='编辑讲师'>" +
          "</div>";
        var div = document.createElement("div"); 
        div.innerHTML=str;

        document.body.appendChild(div);

        // 获取添加讲师按钮
        var btnAddTeacher = document.getElementById("btnAddTeacher");
        btnAddTeacher.onclick = function(){
            teacherAdd();
        }

    }
});