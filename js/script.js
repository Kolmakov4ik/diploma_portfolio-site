
window.onscroll = function() {'use strict';myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    'use strict';
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky");
        
    }
}

var button = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    button.addClass('show');
  } else {
    button.removeClass('show');
  }
});

button.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


var width = 1024;


if (window.screen.width <= width) {
    var index = 0;
    $("#menu" + index ).hide(); 
    var spanForInfo = document.createElement("span");
    spanForInfo.className = "menuTrigger";
    spanForInfo.id = "hamburger";
    spanForInfo.onclick = ShowOrHide;
    wrapper.onclick = Hhide;
    nav.insertBefore(spanForInfo, menu0)


    var spanForHamburger = document.createElement("span");
    spanForHamburger.className = "mainLine";
    spanForInfo.appendChild(spanForHamburger);

    function Show(index, burger) {
        $("#menu" + index ).show(); 
        $(burger).toggleClass('menuToggle');
        $(header).toggleClass('headToggle');
        $(body).toggleClass('body');
        // console.log("true"); 
    }
    function Hide(index, burger) {
        $("#menu" + index ).hide(); 
        $(burger).removeClass('menuToggle');
        $(header).removeClass('headToggle');
        $(body).removeClass('body');
        // console.log("false");
    }
    function ShowOrHide() {
        'use strict';
        var divs = document.querySelectorAll("span#hamburger");
        var burger = $(".menuTrigger");
        var head = $(".header");
        var burgerClass = burger[index].getAttribute("class");
        // console.log(burgerClass.includes('menuToggle'));

        if (burgerClass.includes('menuToggle')) {
            Hide(index, burger[index]);
        }else {
            Show(index, burger[index]);
        }
        
    }
    function Hhide() {
        'use strict';
        var divs = document.querySelectorAll("span#hamburger");
        var burger = $(".menuTrigger");
        var head = $(".header");
        var burgerClass = burger[index].getAttribute("class");
        
        if (burgerClass.includes('menuToggle')) {
            Hide(index, burger[index]);
        }else {
            console.log("Not necessary");
        }
    }
    // console.log(screen.width +"px");
}else{
    // console.log(screen.width + "px > than 1024px");
}
