/**
 * Created by Administrator on 2017/1/11.
 */
$(function(){
    var $navbarItem=$('.body .navbar .navbarItem>li');
    var $pages=$('.body .content>div');
    // home页点击事件
    $('.body .content .home .homeContent .imgLink').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.body .content .page1').show().siblings().hide();
        $('.body .content .page1').children().eq(1).show().siblings().hide();
    })
    // 导航栏点击事件
    $navbarItem.on('click',function(){
        var _index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $pages.eq(_index).show().siblings().hide();
        if(!$pages.eq(_index).hasClass('home')){
            $pages.eq(_index).children().eq(1).show().siblings().hide();
        }
    })
    // 导航栏子栏点击事件
    $navbarItem.mouseover(function(){
        var index=$(this).index()-1;
        if(index==-1){return};
        $('.body .navbar .navbarTab').show();
        $('.body .navbar .navbarTab tr').eq(index).show(
            function(){
                $(this).children('td').click(function(){
                    var _index=$(this).index();
                    console.log(_index)
                    var classname=$(this).parent().attr('class');
                        classname=classname.replace('hide','')
                        classname=classname.replace(' ','')
                        navbarTabHide()
                    $('.body .content .'+classname+'').show().siblings().hide();
                    $('.body .content .'+classname+'').children().eq(_index).show().siblings().hide();
                });
            }
        ).siblings().hide();
    })

    $(document).click(navbarTabHide)

    function navbarTabHide(){
        $('.body .navbar .navbarTab').hide();
        $('.body .navbar .navbarTab tr').hide()

    }
})
