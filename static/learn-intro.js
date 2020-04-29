
$(document).ready(function () {
    set_active_learn_tab_to_active("#intro-tab")

    set_previous_page_link("/learn/weaknesses")
    set_next_page_link("/learn/strengths")

    remove_previous_button()

    $("#fire-container").append(pokemon_full_image_factory("Charmander"))
    $("#fire-container").append(pokemon_type_span_factory("Fire"))

    $("#water-container").append(pokemon_full_image_factory("Squirtle"))
    $("#water-container").append(pokemon_type_span_factory("Water"))

    $("#grass-container").append(pokemon_full_image_factory("Bulbasaur"))
    $("#grass-container").append(pokemon_type_span_factory("Grass"))

})
