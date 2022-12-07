let base_url = "https://pokeapi.co/api/v2/generation/1/"
let url_pokemon = "https://pokeapi.co/api/v2/pokemon/"

pokemon()
async function pokemon() {
    let response = await fetch(base_url)
    let data = await response.json()

    let html = "<option value=''>Seleccione . . .</option>"
    for(index in data.pokemon_species){
        html += "<option value="+data.pokemon_species[index].name+">"+data.pokemon_species[index].name+"</option>"
    }
    $("#lista").append(html)
}

async function ver() {
    let response = await fetch(url_pokemon+$("#lista").val())
    let data = await response.json()

    $("#poke_img").attr("src", data.sprites.front_default)
    $("#poke_name").text(data.name)
}