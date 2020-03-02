$(function() {
    // 默认图片数组
    var initIcon = $(".init-icon")
    // 默认图片路径
    var normalList = []
    // 动态路径
    var activeList = []

    initIcon.each(function (index, element){
        normalList.push($(element).attr("src"))
        activeList.push($(element).attr("src").replace(/@2x.png/g, "-active@2x.png"))
    });
    //每个输入框获取焦点 失去焦点时
    $(".infoText").each(function (index, element) {
        $(this).focus(function () {
            $(this).css("border-bottom-color", "rgba(45,125,246,1)")
            $(initIcon[index]).attr("src", activeList[index])        
        })
        $(this).blur(function () {
            $(this).css("border-bottom-color", "rgba(206,219,234,1)")
            $(initIcon[index]).attr("src", normalList[index])
        })
    })
    // 点击按钮更换背景颜色
    $(".querybtn").click(function(){
        $(".querybtn").css("background-color","#2271e8")
      })
})
