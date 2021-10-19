$(document).ready(function () {
    let clickCount = 0;
    let changed = false;

    $("#avatar").click(function (e) {
        e.preventDefault();
        clickCount++;
        console.log(clickCount);
        if (clickCount == 5) {
            changeAvatar();
            console.log("changed");
            clickCount = 0;
        }
    });

    function changeAvatar() {
        if(!changed) {
            $("#avatar").attr("src", "img/My Love Pixel Art 800x800.png");
            $("#welcome").text("Hi, I'm Meimei <3");
            $("body").css("background-color", "#FFBF00");
            changed = true;
        } else {
            $("#avatar").attr("src", "img/Aquatixel Pixel Art 800x800.png");
            $("#welcome").text("Hi, I'm Aquapaka");
            $("body").css("background-color", "#03A9F4");
            changed = false;
        }        
    }
});
