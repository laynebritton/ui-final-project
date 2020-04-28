function set_quiz_tab_to_active(tab) {
    $("#home-tab").removeClass("active")
    $("#learn-tab").removeClass("active")
    $("#quiz-tab").removeClass("active")

    $(tab).addClass("active")
}

function set_active_learn_tab_to_active(tab) {
    $("#intro-tab").removeClass("active")
    $("#strengths-tab").removeClass("active")
    $("#weaknesses-tab").removeClass("active")
    $("#types1-tab").removeClass("active")
    $("#types2-tab").removeClass("active")
    $("#multiple-types-tab-tab").removeClass("active")

    $(tab).addClass("active")
}

$(document).ready(function () {

    set_quiz_tab_to_active("#learn-tab")

})
