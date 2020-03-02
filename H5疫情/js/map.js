$(function () {
    // tab栏切换
    $(".tabBox li").click(function () {
        var i = $(this).index();
        $(this).addClass('currentTab').siblings().removeClass('currentTab');
    })
    // 地图高度自适应
    $(".mapBox").height(function () {
        var footerH = $(".codeBox").height()
        var headerH = $("header").height()
        var currentH = $(document).height()
        console.log(footerH, headerH, currentH);
        return currentH - headerH - footerH
    })
    // loading 动画
    function loadingToggle() {
        document.getElementsByClassName('loading')[0].classList.toggle('loading-none');
    }
})