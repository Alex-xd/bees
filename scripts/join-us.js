window.onload = function () {
    skippage();
    clickradio();
};
function skippage() {
    var oAside = document.getElementsByClassName("aside")[0];
    var oSym = oAside.getElementsByTagName("a");
    var i;
    for (i = 0; i < 2; i++) {
        oSym[i].index = i;
        oSym[i].onclick = function () {
            this.style.backgroundColor = "#000";
            oSym[1 - this.index].style.backgroundColor = "#fff";
        }
    }
}

/*单选框点击事件*/
function clickradio() {

    /*性别*/
    var oGender = document.getElementsByClassName("radgend")[0];
    var oGradio = oGender.getElementsByTagName("input");
    var oGspan = oGender.getElementsByTagName("span");
    var j, sRadio = "radio";
    for (j = 0; j < oGradio.length; j++) {
        oGradio[j].index = j;
        oGradio[j].onclick = function () {
            for (j = 0; j < oGradio.length; j++) {
                removeClass(oGspan[j], sRadio)
            }
            addClass(oGspan[this.index], sRadio);
        }
    }
    /*学校*/
    var oLocation = document.getElementsByClassName("radloca")[0];
    var oLinput = oLocation.getElementsByTagName("input");
    var oLspan = oLocation.getElementsByTagName("span");
    var sLoca = "checked";
    for (j = 0; j < oLinput.length; j++) {
        oLinput[j].index = j;
        oLinput[j].onclick = function () {
            for (j = 0; j < oLinput.length; j++) {
                removeClass(oLspan[j], sLoca)
            }
            addClass(oLspan[this.index], sLoca);
        }
    }

    /*组别*/
    var oGroup = document.getElementsByClassName("radgr")[0];
    var oGrradio = oGroup.getElementsByTagName("input");
    var oGrspan = oGroup.getElementsByTagName("span");
    var sGroup = "group-checked";
    for (j = 0; j < oGrradio.length; j++) {
        oGrradio[j].index = j;
        oGrradio[j].onclick = function () {
            for (j = 0; j < oGrradio.length; j++) {
                removeClass(oGrspan[j], sGroup)
            }
            addClass(oGrspan[this.index], sGroup);
        }
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
    if (eclass == null) {
        return false;
    }
    eclass = eclass.replace(iclass, "");
    element.setAttribute("class", eclass);
}

/*
 /!*事件处理对象*!/
 var oEventHandle = {
 addHandler : function (element,type,handler) {
 if(element.addEventListener){
 element.addEventListener(type,handler,false);
 }else if(element.attachEvent){
 element.attachEvent("on"+type,handler);
 }else {
 element["on"+type] = handler;
 }
 },
 removeHandler :function (element,type,handler) {
 if(element.removeEventListener){
 element.removeEventListener(type,handler,false);
 }else if(element.detachEvent){
 element.detachEvent("on"+type,handler);
 }else {
 element["on"+type] = null;
 }
 },

 getWheelDeleta : function(event){
 if(event.wheelDelta){
 return (client.engine.opera && client.engine.opera<9.5 ?
 -event.wheelDelta : event.wheelDelta);
 }
 else {
 return -event.detail *40;
 }
 },
 getEvent : function(event){
 return event ? event : window.event;
 },

 getTarget :function (event) {
 return event.target || event.srcElement;
 }
 }
 */
