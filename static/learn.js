function set_quiz_tab_to_active(tab) {
    $("#home-tab").removeClass("active")
    $("#learn-tab").removeClass("active")
    $("#quiz-tab").removeClass("active")

    $(tab).addClass("active")
}


$(document).ready(function () {

    set_quiz_tab_to_active("#learn-tab")

})
