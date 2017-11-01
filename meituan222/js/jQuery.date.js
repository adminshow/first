;(function($){
    //声明一个默认的
    $.dat=function(opt){
        var deft={
            con:"button",
            b:".b",
            list:".list",
            box:"#box",
            bg:"bg"
        }
        //扩充
        var set=$.extend({},deft,opt);
        //获取当前系统时间
        function fn(d){
            var timer=d;
            var year=timer.getFullYear();
            var month=timer.getMonth();
            var day=timer.getDate();
            $(set.b).text(year+"年"+(month+1)+"月"+day+"日");

            //获取当前月份第一天是星期几
            var newtime=new Date(year,month,1).getDay();

            //获取当前月份最后一天是几号
            var newtime1=new Date(year,(month+1),0).getDate();
            for(var i=1;i<=42;i++){
                var pbtime=new Date(year,month,i-newtime).getDate();
                if(i-newtime<=0||i-newtime>newtime1){
                    $("<li>"+pbtime+"</li>").addClass('bb').appendTo(set.list)
                }else{
                    if(pbtime==day){
                        $("<li>"+pbtime+"</li>").addClass('bg1').appendTo(set.list)
                    }else{
                        $("<li>"+pbtime+"</li>").appendTo(set.list)

                    }
                }
            }
        }
        fn(new Date())
      /* function setdate(d){
            var time=d;
            var y=time.getFullYear();
            var m=time.getMonth();
            var d=time.getDate();
            $(set.b).text(y+"年"+(m+1)+"月"+d+"日");

            //获取当前月1号是星期几
            var newtime=new Date(y,m,1);
            var fdw=newtime.getDay();
            //获取当前月最后一天的日期
            //切记：下个月的第0天，是当前月的最后一天
            var newtime1=new Date(y,(m+1),0);
            var ldd=newtime1.getDate();
            for(var i=1;i<=42;i++){
                var newtime2=new Date(y,m,i-fdw).getDate();
                if(i-fdw<=0||i-fdw>ldd){
                    $("<li style='background: #ccc'>"+newtime2+"</li>").appendTo(set.list)
                }else{
                    if(d==newtime2){
                        $("<li class='"+set.bg+"'>"+newtime2+"</li>").appendTo(set.list)
                    }else{
                        $("<li>"+newtime2+"</li>").appendTo(set.list)
                    }
                }
            }
       }
       setdate(new Date())
        $(set.con).on("click",function(){
            $(set.list).html("")
            var txt=$(set.b).text();
            var y=txt.split(/[\u4e00-\u9fa5]/)[0]*1;
            var m=txt.split(/[\u4e00-\u9fa5]/)[1]*1-1;
            var r=txt.split(/[\u4e00-\u9fa5]/)[2]*1;
            var tet=$(this).text();
            switch(tet){
                case "上一年":
                    setdate(new Date((y-1),m,r))
                break;
                case "下一年":
                    setdate(new Date((y+1),m,r))
                break;
                case "上个月":
                    setdate(new Date(y,(m-1),r))
                break;
                case "下个月":
                    setdate(new Date(y,(m+1),r))
                break;
            }
        })*/
    }

})(jQuery)