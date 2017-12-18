/**
 * Created by lenovo on 17/12/13 013.
 */
var swiper = new Swiper('.swiper-container', {
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //让分页器支持点击
        clickable: true,
    },

    // 前进按钮
    navigation: {
        nextEl: '.swiper-button-next'
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
})

//音乐
var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector("#mp3btn");

mp3btn.addEventListener('click', function () {
    if (mp3.paused) {
        mp3.play()
        mp3btn.style.animationPlayState = 'running';
    } else {
        mp3.pause()
        mp3btn.style.animationPlayState = 'paused';
    }
})
