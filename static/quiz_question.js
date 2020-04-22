var line_break = $('<br>')

function set_quiz_tab_to_active(tab) {
    $("#home-tab").removeClass("active")
    $("#learn-tab").removeClass("active")
    $("#quiz-tab").removeClass("active")

    $(tab).addClass("active")
}

function populate_options(){
    console.log(question['options'])
    question['options'].forEach(insert_option)

}

function insert_option(option){
    var option_entry = $('<button class="btn btn-light answer-button">')

    $(option_entry).text(option.pokemon + ": " + option.types[0])

    if(option.types[0] == question.answer){
        $(option_entry).addClass("correct-answer")
    }

    $("#answer-container").append(option_entry)
}

function insert_prompt(){
    var header = $('<h2>')
    $(header).text("Your opponent sends out: "+ question.enemy)

    var sub_header = $('<h3>')
    $(sub_header).text('A ' + question.types[0] + ' type pokemon')

    $("#prompt-container").append(header)
    $("#prompt-container").append(line_break)
    $("#prompt-container").append(sub_header)

}
function insert_enemy_image(){
    var image = $('<img class="img-fluid" src="' + question.enemy_image + '">')

    $("#enemy-image-container").append(image)
}

function populate_page(){
    insert_prompt()
    insert_enemy_image()
    populate_options()
}



$(document).ready(function () {
    set_quiz_tab_to_active("#quiz-tab")
    
    populate_page()

})
