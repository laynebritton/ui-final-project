function set_active_learn_tab_to_active(tab) {
    $("#intro-tab").removeClass("active")
    $("#strengths-tab").removeClass("active")
    $("#weaknesses-tab").removeClass("active")
    $("#types1-tab").removeClass("active")
    $("#types2-tab").removeClass("active")
    $("#multiple-types-tab-tab").removeClass("active")

    $(tab).addClass("active")
}

function set_next_page_link(page){
    $("#next-link").attr("href", page)
}

function set_previous_page_link(page){
    $("#previous-link").attr("href", page)
}

function remove_next_button(){
    $("#next-button").remove()
}

function remove_previous_button(){
    $("#previous-button").remove()
}

$(document).ready(function () {

    update_active_tab("#learn-tab")

})
