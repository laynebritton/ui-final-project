
$(document).ready(function () {
    update_active_tab("#home-tab")
    $("#learn-button").click(function () {
        window.location.href = '/learn'        
    })
    $("#quiz-button").click(function () {
        window.location.href = '/quiz'        
    })
})
