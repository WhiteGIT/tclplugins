

function init(url) {
    $.ajax({
        url:url,
        method:"GET",
        dataType:"text",
        success:function (data) {
            insertHTML(ts = eval(data)())
        }
    });
}

function insertHTML(data) {
    var lineHeight = parseFloat($("body").css("line-height"));
    var H_lis="",H_section="";
    for(var d in data){
        var test="fff"
        var id=d+parseInt(Math.random()*100);
        var funString=data[d].toString();
        var textareaHeight= lineHeight*(funString.match(/\n/ig).length+1)+20;
        H_lis+='<li><a href="#'+id+'">'+d+'</a></li>';
        H_section+='<div><h1 id="'+id+'">'+d+'</h1><textarea style="height: '+textareaHeight+'px" class="form-control fun_area">'+funString+'</textarea>' +
            '<textarea placeholder="一些可以运行的JS,然后点Run，看效果" class="form-control" id="T'+id+'" style="height: 50px; margin: 5px 0"></textarea><button class="btn btn-sm btn-primary">Run</button>'+
            '<hr></div>';
    }
    //插入侧边导航
    $("#affix").html(H_lis);
    //插入内容
    $("#section").html(H_section);
    //点击Run 按钮
    $(".btn-primary").each(function () {
        $(this).click(function () {
            var arear = $(this).parent().find("textarea");
            arear.eq(0).val() && eval( arear.eq(0).val())
            arear.eq(1).val() && eval(arear.eq(1).val())
        })
    })
    //启动导航插件
    $("#affix").affix({
        offset: {
            top: 210
        }
    });
}