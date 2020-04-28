var line_break = $('<br>')


function populate_options(){
    console.log(question['options'])
    question['options'].forEach(insert_option)

    $(".correct-answer").click(function () {
        $("#answer-container").find(".wrong-answer").addClass("correct-answer-reveal-wrong-answer")
        $("#answer-container").find(".correct-answer").addClass("correct-answer-reveal")
    })
    $(".wrong-answer").click(function () {
        $("#answer-container").find(".wrong-answer").addClass("wrong-answer-reveal")
        $("#answer-container").find(".correct-answer").addClass("wrong-answer-reveal-correct-answer")

    })
}

function insert_option(option){
    var option_entry = $('<button class="btn btn-dark option-button">')
    
    $(option_entry).append(pokemon_icon_image_factory(option.pokemon))

    var pokemon_name = $("<span>")
    $(pokemon_name).text(option.pokemon + ": ")
    $(option_entry).append(pokemon_name)
    $(option_entry).append(pokemon_type_image_factory(option.types[0]) )

    if(option.types[0] == question.answer){
        $(option_entry).addClass("correct-answer")
    }else{
        $(option_entry).addClass("wrong-answer")
    }

    $("#answer-container").append(option_entry)
}

function insert_prompt(){
    var header = $('<h2>')
    $(header).text("Your opponent sends out: ")
    $("#prompt-container").append(header)
    $("#prompt-container").append(line_break)

    var sub_header = $('<span class="enemy-pokemon-text" >')
    $(sub_header).text(question.enemy + " ")
    $("#prompt-container").append(sub_header)
    $("#prompt-container").append(pokemon_type_image_factory(question.types[0]))



}

function insert_enemy_image(){
    var image = pokemon_full_image_factory(question.enemy)
    $("#enemy-image-container").append(image)
}

function insert_player_prompt(){
    var header= $("<h4>")
    $(header).text("Which Pokémon will you use?")
    $("#answer-container").append(header)
}




function populate_page(){
    insert_prompt()
    insert_player_prompt()
    insert_enemy_image()
    populate_options()
}



$(document).ready(function () {
    update_active_tab("#quiz-tab")
    
    populate_page()

})
