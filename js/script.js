$(document).ready(function () {
    let clickCount = 0;
    let changed = false;

    $("#avatar, #avatar1").click(function (e) {
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
            $("#avatar").hide();
            $("#avatar1").show();
            $("#welcome").text("Hi, I'm Meimei !");
            $("body").css("background-color", "#FFBF00");
            changed = true;
        } else {
            $("#avatar1").hide();
            $("#avatar").show();
            $("#welcome").text("Hi, I'm Aquapaka");
            $("body").css("background-color", "#03A9F4");
            changed = false;
        }        
    }
});
