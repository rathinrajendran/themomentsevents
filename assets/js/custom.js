$(document).ready(function() {
    stickyMeny();
    // $(".profile-sub").click(function() {
    //     var workName = $(this).attr('pro-name');
    //     console.log(workName);
    //     $(".list-content-block").removeClass("focused");
    //     $(".list-content-block[work-name='" + workName + "']").addClass("focused");
    //     $(".profile-sub").removeClass("this-focused");
    //     $(this).addClass("this-focused").parents(".profile-block").addClass("focused");
    // });

    // $(".btn-menu").click(function() {
    //     $(".menu-main").toggleClass('focused');
    // });

    // setTimeout(function() {
    //     $(".loader-block").hide();
    // }, 10000);
    $('.btn-menu').on('click', function() {
        $(".menu-main").toggleClass('focused');
        $('.bar').toggleClass('animate');
        return false;
    })

});

function stickyMeny() {
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 145) {
            $(".main-block").addClass("sticky");
        } else {
            $(".main-block").removeClass('sticky');
        }
    });
}