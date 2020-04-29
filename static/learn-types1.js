
$(document).ready(function () {
    set_active_learn_tab_to_active("#types1-tab")
    set_next_page_link("/learn/types2")
    set_previous_page_link("/learn/weaknesses")

    $("#fire-collapse").click(function() { 
        $('#water-type-chart').removeClass('show')
        $('#grass-type-chart').removeClass('show')

     })

    $("#water-collapse").click(function() { 
        $('#fire-type-chart').removeClass('show')
        $('#grass-type-chart').removeClass('show')
     })

     $("#grass-collapse").click(function() { 
        $('#fire-type-chart').removeClass('show')
        $('#water-type-chart').removeClass('show')

     })
})
