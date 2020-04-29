
$(document).ready(function () {
    set_active_learn_tab_to_active("#types2-tab")
    set_next_page_link("/learn/multiple_types")
    set_previous_page_link("/learn/types1")

    $("#flying-collapse").click(function() { 
        $('#rock-type-chart').removeClass('show')
        $('#fighting-type-chart').removeClass('show')

     })

    $("#rock-collapse").click(function() { 
        $('#flying-type-chart').removeClass('show')
        $('#fighting-type-chart').removeClass('show')
     })

     $("#fighting-collapse").click(function() { 
        $('#flying-type-chart').removeClass('show')
        $('#rock-type-chart').removeClass('show')

     })
})
