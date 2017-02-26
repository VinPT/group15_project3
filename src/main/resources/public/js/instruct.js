

var checked = false;
var cover;
var instructions;

function loadOverlay() {
    "use strict";
    document.getElement("instructions").style.display = "block";
}
function toggleOverlay() {
    "use strict";
    cover = document.getElementById("cover");
    instructions = document.getElementById("instructions");

    cover.style.opacity = 0.5;
    if (true !== checked) {
        instructions.style.display = "none";
        checked = true;
    } else {
        instructions.style.display = "block";
        checked = false;
    }
}

//function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(";");
//     for(var i=0; i<ca.length; i++) {
//         var c = ca[i];
//        while (c.charAt(0)==" ") c = c.substring(1);
//         if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
//     }
//     return "";
//}
