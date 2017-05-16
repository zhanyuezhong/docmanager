var teachers={
    //跳转页面
    judgePage:function(pageNum){
        //设定当前页码
        $("#pageNum").val(pageNum);
        //出发搜索按钮的点击事件
        $("#btnSearch").trigger("click");
    },
    //用户相关的url
    URL:{
        queryById:function(id){
            return "/teachers/"+id+"/detail";
        },
        editURL:function(){
            return "/teachers/edit";
        },
        deleteURL:function(id){
            return "/teachers/"+id+"/delete";
        }

    },
    //查询单个教师信息
    query:function(id){

        $.get(teachers.URL.queryById(id),{},function(data){

            if(data&&data.success){
                // 弹出模态框并且赋值
                $("#teacherId").val(data.data['teacherId']);
                $("#teacherName").val(data.data['teacherName']);
                $("#teacherCode").val(data.data['teacherCode']);
                $("#college").val(data.data['college']);
                $("#major").val(data.data['major']);
                $("#teacherModel").modal({//显示弹出层
                    backdrop: 'static',//不可后退
                    keyboard: false//进制键盘事件
                }).show();
            }else{
                $("#success").show();
            }
        });
    },
    //编辑用户信息
    edit:function(){

       var teacherId= $("#teacherId").val();
       var teacherName=$("#teacherName").val();
       var teacherCode= $("#teacherCode").val();
       var college= $("#college").val();
       var major= $("#major").val();

        var teacher={
            "teacherId":teacherId,
            "teacherName":teacherName,
            "teacherCode":teacherCode,
            "college":college,
            "major":major
        };
        $.post(teachers.URL.editURL(),teacher,function(data){
            if(data&&data.success){
                // 编辑成功：隐藏显示框，刷新界面
                Alert({
                    msg: data.message,
                    onOk: function(){
                        window.location.reload();
                    }

                });

            }else{//显示错误信息
                Alert(data['message']);
            }
        });

    },
    //删除用户
    delete:function(id){
        if(id&&!isNaN(id)){
            Confirm({
                msg: '你确定要删除该数据吗？',
                onOk: function(){
                    $.post(teachers.URL.deleteURL(id),{},function(data){
                        if(data){
                            window.location.reload();

                        }
                    });
                },
                onCancel: function(){
                }

            });
        }
    }



}




$(function(){

/////////点击添加用户按钮出发事件/////////////

    $("#btnAdd").click(function(){
        //清空表单
        $('#form')[0].reset();
        $("#teacherId").val('');
        $("#teacherModel").modal({//显示弹出层
            backdrop: 'static',//不可后退
            keyboard: false//进制键盘事件
        }).show();
    });
/////////点击添加用户按钮出发事件/////////////


/////////点击关闭编辑框/////////////

    $("#closeBtn").click(function(){
        $("#teacherModel").modal('hide');
    });
/////////点击关闭编辑框/////////////

/////////点击确定按钮编辑框/////////////

    $("#editBtn").click(function(){
        teachers.edit();
    });

/////////点击确定按钮/////////////

});