window.onload = function () {
    departmentmove();
    fadeLeader();
};
function departmentmove() {
    var oLi = document.getElementsByClassName("bm-item");
    var oLogo = document.getElementsByClassName("item-main-logo");
    var on = "on";
    var i, timer1, timer2;

    for (i = 0; i < oLi.length; i++) {

        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            //将之前宽度为396的li设置定时器慢慢变为196；
            for (i = 0; i < oLi.length; i++) {
                if (oLi[i].offsetWidth >= 178) {
                    oLi[i].style.width = 152 + "px";

                }
                removeClass(oLi[i], on);
            }
            this.style.width = 303 + "px";
            addClass(this, on);
        }
    }
}
function fadeLeader() {
    var oCenter = document.getElementsByClassName("center-box");
    var i;
    for (i = 0; i < oCenter.length; i++) {
        fadeIn(oCenter[i]);
    }
}

function addClass(element, iclass) {
    var eclass = element.getAttribute("class");

    eclass = eclass + " ";
    eclass = eclass.concat(iclass);
    element.setAttribute("class", eclass);

}

function removeClass(element, iclass) {
    var eclass = element.getAttribute("class");

    eclass = eclass.replace(iclass, "");
    element.setAttribute("class", eclass);
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];

    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
};


function fadeIn(obj) {
    var iCur = getStyle(obj, 'opacity');
    if (iCur == 1) {
        return false;
    }

    var value = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var Speed = 5;
        if (value == 100) {
            clearInterval(obj.timer);
        }
        else {
            value += Speed;
            obj.style.opacity = value / 100;
            obj.style.fliter = 'alpha(opacity=' + value + ')';
        }
    }, 30);
};


//boyuan modified ↓
// ===============================================================

// 鼠标滑过图片显示介绍信息
$(function () {
    var center_box = document.getElementsByClassName("top");
    for (var i = 0; i < center_box.length; i++) {
        center_box[i].onmouseover = function (_i) {
            return function () {
                var fact = document.getElementsByClassName("center-box")[_i].getElementsByClassName("fact");
                for (var j = 0; j < fact.length; j++) {
                    $(fact[j]).fadeIn();
                }

            }
        }(i);

        center_box[i].onmouseout = function (_i) {
            return function () {
                var fact = document.getElementsByClassName("center-box")[_i].getElementsByClassName("fact");
                for (var j = 0; j < fact.length; j++) {
                    $(fact[j]).fadeOut();
                }
            }
        }(i);
    }
});




