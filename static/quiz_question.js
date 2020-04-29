var line_break = $('<br>')
var player_score = 0
var player_questions_answered = 0

function populate_options() {
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

function insert_option(option) {
    var option_entry = $('<button class="btn btn-dark option-button">')

    $(option_entry).append(pokemon_icon_image_factory(option.pokemon))

    var pokemon_name = $("<span>")
    $(pokemon_name).text(option.pokemon + ": ")
    $(option_entry).append(pokemon_name)
    $(option_entry).append(pokemon_type_span_factory(option.types[0]))

    if (option.types[0] == question.answer) {
        $(option_entry).addClass("correct-answer")
    } else {
        $(option_entry).addClass("wrong-answer")
    }

    $("#answer-container").append(option_entry)
}

function insert_prompt() {
    var header = $('<h2>')
    $(header).text("Your opponent sends out: ")
    $("#prompt-container").append(header)
    $("#prompt-container").append(line_break)

    var sub_header = $('<span class="enemy-pokemon-text" >')
    $(sub_header).text(question.enemy + " ")
    $("#prompt-container").append(sub_header)

    $("#prompt-container").append($("<br>"))

    var enemy_type = pokemon_type_span_factory(question.types[0])
    $(enemy_type).addClass("enemy-type-span")
    $("#prompt-container").append(enemy_type)

    if (question.types[1] != null) {
        enemy_type = pokemon_type_span_factory(question.types[1])
        $(enemy_type).addClass("enemy-type-span")
        $("#prompt-container").append(enemy_type)
    }



}

function insert_enemy_image() {
    var image = pokemon_full_image_factory(question.enemy)
    $("#enemy-image-container").append(image)
}

function insert_player_prompt() {
    var header = $("<h4>")
    $(header).text("Which Pokémon will you use?")
    $("#answer-container").append(header)
}


function insert_player_score(){
    var score = $('<h2>')
    $(score).text("Your score: " + player_score + " / " + player_questions_answered)
    $("#score-container").append(score)
}

function player_answered_correct(){
    player_score++
    player_questions_answered++
}

function player_answered_incorrect(){
    player_questions_answered++
}

function populate_page() {
    insert_prompt()
    insert_player_prompt()
    insert_enemy_image()
    insert_player_score()
    populate_options()
}

function clear_page(){
    $("#prompt-container").empty()
    $("#enemy-image-container").empty()
    $("#answer-container").empty()
    $("#score-container").empty()
}

function load_next_question(){
    var query ={
        "id": question.id
    }
    $.ajax({
        type: "POST",
        url: "get_next_question",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(query),
        success: function(result){
            var new_question = result["question"]
			question = new_question

            clear_page()
            populate_page()
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

$(document).ready(function () {
    update_active_tab("#quiz-tab")

    populate_page()

    $("#next-button").click(function () {
        load_next_question()
    })

})
