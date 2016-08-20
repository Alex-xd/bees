/*
 *     Created by Boyuan on 2016.7.28
 *     Modified by Boyuan on 2016.8.9
 */

window.onload = (function() {
    slideImg();
    (function() {
        var re = /x/;
        var i = 0;
        console.log(re);
        re.toString = function() {
            return '第 ' + (++i) + ' 次打开控制台';
        };
    })();
});


function slideImg() {
    var container = document.getElementsByClassName('banner-ul')[0];
    var next = document.getElementsByClassName('btn-next')[0];
    var prev = document.getElementsByClassName('btn-prev')[0];
    var small_dots = document.getElementsByClassName('buttons')[0].getElementsByTagName('span');
    var img_width = -parseInt(container.offsetLeft);
    var moving = false;
    var timer = null;

    next.onclick = rightClick;
    prev.onclick = leftClick;

    //模拟左右点击动作
    function rightClick() {
        if (!moving) {
            if (container.offsetLeft <= -3 * img_width) //模拟无限滚动
            {
                container.style.left = 0 + "px";
            }
            startMove(container.offsetLeft - img_width);
        }
    }

    function leftClick() {
        if (!moving) {
            if (container.offsetLeft >= -img_width) {
                container.style.left = -4 * img_width + "px";
            }
            startMove(container.offsetLeft + img_width);
        }
    }

    //绑定点击小圆点切换事件
    for (var i = 0; i < small_dots.length; i++) {
        small_dots[i].onclick = function(temp) {
            return function() {
                if (!moving)
                    startMove((temp + 1) * -img_width);
            }
        }(i)
    }

    //移动到指定位置
    function startMove(target) {
        var speed = 0;

        switchDot((target / -img_width) - 1); //  -1180 -2360 -3540

        clearInterval(timer); //解决重复点击的定时器叠加bug

        timer = setInterval(function() {
            speed = (target - container.offsetLeft) / 10; //速度

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (target == container.offsetLeft) {
                clearInterval(timer);
                moving = false;
            } else {
                container.style.left = container.offsetLeft + speed + "px";
                moving = true;
            }
        }, 15);
    }

    //切换到指定的小圆点
    function switchDot(dot_index) {
        for (var i = 0; i < small_dots.length; i++) {
            if (small_dots[i].className == 'on css-rotating-item') {
                small_dots[i].className = '';
            }
        }
        small_dots[dot_index].className = 'on css-rotating-item';
    }

    var clearAutoPlay = null;
    //自动播放
    function autoPlay() {
        clearInterval(clearAutoPlay);
        clearAutoPlay = setInterval(function() {
            rightClick();
        }, 5000);
    }

    function hoverStopSlide() {
        next.onmouseover = function () {
            clearInterval(clearAutoPlay);
        };
        next.onmouseout = function () {
            autoPlay();
        };
        prev.onmouseover = function () {
            clearInterval(clearAutoPlay);
        };
        prev.onmouseout = function () {
            autoPlay();
        };
        var video = document.getElementsByClassName("banner-3-video")[1];
        video.onmouseover = function () {
            clearInterval(clearAutoPlay);
        };
        video.onmouseout = function () {
            autoPlay();
        };
    }

    hoverStopSlide();

    autoPlay();
}
