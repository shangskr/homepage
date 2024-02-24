console.log('%c安小歪 © 2024 shangskr.top', 'background-color: #ff00ff; color: white; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;');
console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;');
console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;');
console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;');
console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;');







document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // 阻止默认的上下文菜单行为
});










function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function wx(imageURL) {
    
    var tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc =document.getElementsByClassName('tc');
var tc_main =document.getElementsByClassName('tc-main');
  tc[0].addEventListener('click',function (event) {
    wx();
  });

  tc_main[0].addEventListener('click',function (event) {
       event.stopPropagation(); // 阻止事件冒泡到父元素  
  });

function left() {
    toggleClass(".left-main", "left-main-open");
    toggleClass(".left", "left-open");

}


document.addEventListener('DOMContentLoaded', function () {


    var themeState = getCookie("themeState") || "Blue";
    const htmlTag = document.querySelector('html');
    var svgItems = document.getElementsByTagName("svg");
    var tanChiShe = document.getElementById("tanChiShe");




    function changeSvg(color) {
        for (var i = 0; i < svgItems.length; i++) {
            var paths = svgItems[i].getElementsByTagName("path");
            for (var j = 0; j < paths.length; j++) {
                paths[j].setAttribute("fill", color);
            }
        }
    }



    function changeTheme(theme) {
        if (theme == "Dark") {
            themeState = "Dark";
            changeSvg("#ffffff");
            tanChiShe.src = "/static/svg/snake-Dark.svg";
            htmlTag.dataset.theme = 'dack';
        } else if (theme == "Blue") {
            themeState = "Blue";
            changeSvg("#000000");
            tanChiShe.src = "/static/svg/snake-Light.svg";
            htmlTag.dataset.theme = '';
        }
        setCookie("themeState", theme, 365);
    }




    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }


    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) == 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }





    const switchCheckbox = document.getElementById('myonoffswitch');
    
    
    /*夜间自动打开暗色主题
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 20 || currentHour < 6) {
        switchCheckbox.checked = false;
        changeTheme('Dark');
    }

*/
    switchCheckbox.addEventListener('change', function () {
        if (themeState == "Dark") {

            changeTheme("Blue");

        } else if (themeState == "Blue") {

            changeTheme("Dark");
        }
    });

    if (themeState == "Dark") {
        switchCheckbox.checked = false;
    }
    changeTheme(themeState);




    /*淡入效果*/
    var projectItems = document.querySelectorAll(".projectItem");
    function checkProjectItems() {
        for (var i = 0; i < projectItems.length; i++) {
            var projectItem = projectItems[i];
            var projectItemTop = projectItem.getBoundingClientRect().top;

            if (projectItemTop < window.innerHeight * 1.2) {
                projectItem.classList.add("fade-in-visible");
            }
        }
    }

    window.addEventListener("scroll", checkProjectItems);



    /*加载效果*/
    var pageLoading = document.querySelector("#PageLoading");
    var center = document.getElementById("PageLoading-zyyo-center");
    setTimeout(function () {
        checkProjectItems();
        pageLoading.style.opacity = '0';
    }, 300);
    






// 创建一个显示FPS的div元素  
var fpsElement = document.createElement('div');  
fpsElement.id = 'fps';  
fpsElement.style.zIndex = '10000';  
fpsElement.style.position = 'fixed';  
fpsElement.style.left = '0';  
fpsElement.style.backgroundImage = 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)';  
fpsElement.style.webkitBackgroundClip = 'text';  
fpsElement.style.color = 'transparent';  
document.body.insertBefore(fpsElement, document.body.firstChild);  
  
var showFPS = (function() {  
    var requestAnimationFrame = window.requestAnimationFrame ||  
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||  
        window.oRequestAnimationFrame ||  
        window.msRequestAnimationFrame ||  
        function(callback) { window.setTimeout(callback, 1000 / 60); };  
  
    var fps = 0, last = Date.now(), offset, step, appendFps;  
  
    step = function() {  
        offset = Date.now() - last;  
        fps += 1;  
  
        if (offset >= 1000) {  
            last += offset;  
            appendFps(fps);  
            fps = 0;  
        }  
  
        requestAnimationFrame(step);  
    };  
  
    appendFps = function(fpsValue) {  
        console.log(fpsValue + ' FPS');  
        fpsElement.textContent = 'FPS: ' + fpsValue;  
    };  
  
    step();  
})();













});