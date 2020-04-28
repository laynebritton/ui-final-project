var line_break = $('<br>')

function pokemon_type_span_factory(type_name){
    var type =$('<img class="img-fluid pokemon-type-image" >')
    var type_name_lower = type_name.toLowerCase()
    
    if(type_name_lower == "fire"){
        $(type).attr("src","https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif")
    }
    if(type_name_lower == "water"){
        $(type).attr("src","https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif")
    }
    if(type_name_lower == "grass"){
        $(type).attr("src","https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif")
    }
    if(type_name_lower == "rock"){
        $(type).attr("src","https://cdn.bulbagarden.net/upload/1/15/RockIC.gif")
    }
    if(type_name_lower == "flying"){
        $(type).attr("src","https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif")
    }
    if(type_name_lower == "fighting"){
        $(type).attr("src","https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif")
    }

    return type
}

function pokemon_icon_factory(pokemon_name){
    var pokemon_icon =$('<img class="img-fluid pokemon-icon-image" >')
    var pokemon_name_lower = pokemon_name.toString().toLowerCase()

    if(pokemon_name_lower == "bulbasaur"){
        $(pokemon_icon).attr("src","https://cdn.bulbagarden.net/upload/e/ec/001MS.png")
    }
    else if(pokemon_name_lower == "squirtle"){
        $(pokemon_icon).attr("src","https://cdn.bulbagarden.net/upload/9/92/007MS.png")
    }
    else if(pokemon_name_lower == "charmander"){
        $(pokemon_icon).attr("src","https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)")
    }
    else if(pokemon_name_lower == "machop"){
        $(pokemon_icon).attr("src","https://cdn.bulbagarden.net/upload/6/6c/066MS.png")
    }
    else if(pokemon_name_lower == "pidgey"){
        $(pokemon_icon).attr("src","https://cdn.bulbagarden.net/upload/9/9c/016MS.png")
    }

    return pokemon_icon
}

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
    
    $(option_entry).append(pokemon_icon_factory(option.pokemon))

    var pokemon_name = $("<span>")
    $(pokemon_name).text(option.pokemon + ": ")
    $(option_entry).append(pokemon_name)
    $(option_entry).append(pokemon_type_span_factory(option.types[0]) )

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
    $("#prompt-container").append(pokemon_type_span_factory(question.types[0]))



}

function insert_enemy_image(){
    var image = $('<img class="img-fluid" src="' + question.enemy_image + '">')

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
