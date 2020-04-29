function update_active_tab(tab){
    $("#home-tab").removeClass("active")
    $("#learn-tab").removeClass("active")
    $("#quiz-tab").removeClass("active")

    $(tab).addClass("active")
    console.log(tab)
}

function pokemon_type_image_factory(type_name){
    var type =$('<img class="img-fluid pokemon-type-image" >')
    var type_name_lower = type_name.toLowerCase()
    $(type).attr("src",pokemon_type_images[type_name_lower])

    return type
}

function pokemon_icon_image_factory(pokemon_name){
    var pokemon_icon =$('<img class="img-fluid pokemon-icon-image" >')
    var pokemon_name_lower = pokemon_name.toString().toLowerCase()

    $(pokemon_icon).attr("src", pokemon_icon_images[pokemon_name_lower])

    return pokemon_icon
}


function pokemon_full_image_factory(pokemon_name){
    var lower = pokemon_name.toString().toLowerCase()
    console.log(lower)
    var pokemon_image =$('<img class="img-fluid" >')
    $(pokemon_image).attr("src",pokemon_full_images[lower])
    return pokemon_image
}

$(document).ready(function () {

})


var pokemon_type_images ={
    "fire": "https://cdn.bulbagarden.net/upload/d/d0/FireIC.gif",
    "water": "https://cdn.bulbagarden.net/upload/c/cc/WaterIC.gif",
    "grass": "https://cdn.bulbagarden.net/upload/8/8a/GrassIC.gif",
    "rock": "https://cdn.bulbagarden.net/upload/1/15/RockIC.gif",
    "flying": "https://cdn.bulbagarden.net/upload/7/73/FlyingIC.gif",
    "fighting": "https://cdn.bulbagarden.net/upload/8/8e/FightingIC.gif",
}

var pokemon_full_images = {
    "charmander": "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png",
    "typhlosion": "https://cdn.bulbagarden.net/upload/thumb/4/47/157Typhlosion.png/600px-157Typhlosion.png",
    "squirtle": "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/600px-007Squirtle.png",
    "bulbasaur": "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/600px-001Bulbasaur.png",
}

var pokemon_icon_images ={
    "bulbasaur":"https://cdn.bulbagarden.net/upload/e/ec/001MS.png",
    "charmander":"https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
    "squirtle": "https://cdn.bulbagarden.net/upload/9/92/007MS.png",
    "machop":"https://cdn.bulbagarden.net/upload/6/6c/066MS.png",
    "pidgey":"https://cdn.bulbagarden.net/upload/9/9c/016MS.png",
}