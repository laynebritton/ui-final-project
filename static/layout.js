function update_active_tab(tab){
    $("#home-tab").removeClass("active")
    $("#learn-tab").removeClass("active")
    $("#quiz-tab").removeClass("active")

    $(tab).addClass("active")
    console.log(tab)
}


$(document).ready(function () {

    $("#learn-tab").click(function () {
        update_active_tab("#learn-tab")
	})    

})
