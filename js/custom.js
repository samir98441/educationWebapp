function toggleNav() {
    document.getElementById("divNav").classList.toggle("showNav");
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("header").addClass("sticky");
    }
    else {
        $("header").removeClass("sticky");
    }

})