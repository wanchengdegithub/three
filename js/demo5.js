/**
 * Created by Administrator on 2017/5/10.
 */
$(function () {
    $(".pic ul li").mouseover(function () {
        $(this).stop(true).animate({width:"789px"},500).siblings().stop(true).animate({width:"100px"},500)
        })
})
