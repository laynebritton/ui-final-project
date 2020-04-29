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

function pokemon_type_span_factory(type_name){
    
    var type_span = $('<span class="badge">')
    $(type_span).text(type_name)
    if(type_name.toLowerCase() == "fire"){
        $(type_span).addClass("fire-span")
    }
    else if (type_name.toLowerCase() == "water"){
        $(type_span).addClass("water-span")
    }
    else if (type_name.toLowerCase() == "grass"){
        $(type_span).addClass("grass-span")
    }
    else if (type_name.toLowerCase() == "flying"){
        $(type_span).addClass("flying-span")
    }
    else if (type_name.toLowerCase() == "rock"){
        $(type_span).addClass("rock-span")
    }
    else if (type_name.toLowerCase() == "fighting"){
        $(type_span).addClass("fighting-span")
    }

    return type_span
}

function pokemon_icon_image_factory(pokemon_name){
    var pokemon_icon =$('<img class="img-fluid pokemon-icon-image" >')
    var pokemon_name_lower = pokemon_name.toString().toLowerCase()

    $(pokemon_icon).attr("src", pokemon_icon_images[pokemon_name_lower])

    return pokemon_icon
}


function pokemon_full_image_factory(pokemon_name){
    var lower = pokemon_name.toString().toLowerCase()
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
    "machamp": "https://cdn.bulbagarden.net/upload/thumb/8/8f/068Machamp.png/250px-068Machamp.png",
    "rhydon": "https://cdn.bulbagarden.net/upload/thumb/4/47/112Rhydon.png/250px-112Rhydon.png",
    "ludicolo": "https://cdn.bulbagarden.net/upload/thumb/f/ff/272Ludicolo.png/250px-272Ludicolo.png",
    "aerodactyl": "https://cdn.bulbagarden.net/upload/thumb/e/e8/142Aerodactyl.png/250px-142Aerodactyl.png",
    "charizard": "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
    "poliwrath": "https://cdn.bulbagarden.net/upload/thumb/2/2d/062Poliwrath.png/250px-062Poliwrath.png",
    "breloom": "https://cdn.bulbagarden.net/upload/thumb/d/de/286Breloom.png/250px-286Breloom.png",
    "tropius": "https://cdn.bulbagarden.net/upload/thumb/d/dd/357Tropius.png/250px-357Tropius.png",
    "omanyte": "https://cdn.bulbagarden.net/upload/thumb/7/79/138Omanyte.png/250px-138Omanyte.png",
}

var pokemon_icon_images ={
    "bulbasaur":"https://cdn.bulbagarden.net/upload/e/ec/001MS.png",
    "charmander":"https://cdn.bulbagarden.net/upload/b/bb/004MS.png",
    "squirtle": "https://cdn.bulbagarden.net/upload/9/92/007MS.png",
    "machop":"https://cdn.bulbagarden.net/upload/6/6c/066MS.png",
    "pidgey":"https://cdn.bulbagarden.net/upload/9/9c/016MS.png",
    "geodude": "https://cdn.bulbagarden.net/upload/0/04/074MS.png",
    "spearow": "https://cdn.bulbagarden.net/upload/5/5b/021MS.png",
}