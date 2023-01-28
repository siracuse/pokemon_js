var pokemon1 = '';
var pokemon2 = '';

function player_choose_pokemon_1() {
    let value = document.getElementById('player1_choose').value;
    pokemon1 = new Pokemon(value);

    document.getElementById('player_choose_pokemon_img_1').src = 'img/pokemon_sprite/' + pokemon1.name + '.gif'
    document.getElementById('player1_battle_pokemon').src = 'img/pokemon_sprite/' + pokemon1.name + '_back.gif'
    document.getElementById('player_info_name_1').innerHTML = pokemon1.name
    document.getElementById('pokemon_info_pv_value_1').innerHTML = pokemon1.pv + '/' + pokemon1.pv

    document.getElementById('pokemon_attaque_1').innerHTML = pokemon1.a1
    document.getElementById('pokemon_attaque_2').innerHTML = pokemon1.a2
    document.getElementById('pokemon_attaque_3').innerHTML = pokemon1.a3
    document.getElementById('pokemon_attaque_4').innerHTML = pokemon1.a4

    let random_pokemon = {0 : 'bulbizarre', 1: 'carapuce', 2: 'salameche'};
    let pokemon_key = Math.floor(Math.random() * 3)
    pokemon2 = new Pokemon(random_pokemon[pokemon_key]);

    document.getElementById('player2_battle_pokemon').src = 'img/pokemon_sprite/' + pokemon2.name + '.gif'
    document.getElementById('player_info_name_2').innerHTML = pokemon2.name
}


function attaque(pokemon_attaque) {
    
    let attaque_name = document.getElementById(pokemon_attaque).innerText;
    let attaque1 = new Attaque(attaque_name.toLowerCase());
    pokemon2.setNewPv(attaque1.power);

    if (pokemon2.pv <= 0) {
        endMath('pokemon_info_2_pv')
    } else {
        let newWidth = ((pokemon2.pv * 220) / pokemon2.pvMax);
        barrePv(newWidth, 'pokemon_info_2_pv')
        attaque2();
    }    
}

function attaque2() {
    setTimeout(
        function() {
            let random_attaque = {0 : 'a1', 1: 'a2', 2: 'a3', 3: 'a4'};
            let attaque_key = Math.floor(Math.random() * 3)
            let attaque_name = pokemon2[random_attaque[attaque_key]];
            let attaque2 = new Attaque(attaque_name.toLowerCase());
            console.log(attaque_name);
            pokemon1.setNewPv(attaque2.power)

            if (pokemon1.pv <= 0) {
                endMath('pokemon_info_1_pv')
            } else {
                let newWidth = ((pokemon1.pv * 220) / pokemon1.pvMax);    
                barrePv(newWidth, 'pokemon_info_1_pv')
                document.getElementById('pokemon_info_pv_value_1').innerHTML = pokemon1.pv +'/'+pokemon1.pvMax;
            }
        }, 400);
}







//  USEFULL
function endMath(pokemon) {
    document.getElementById('pokemon_attaque_1').style.display ='none';
    document.getElementById('pokemon_attaque_2').style.display ='none';
    document.getElementById('pokemon_attaque_3').style.display ='none';
    document.getElementById('pokemon_attaque_4').style.display ='none';
    document.getElementById(pokemon).style.width = '0px';
}
function barrePv(newWidth, pokemon) {
    newWidthToString = newWidth.toString() + 'px';
    document.getElementById(pokemon).style.width = newWidthToString;
    if (newWidth < 44 ) {
        document.getElementById(pokemon).style.backgroundColor = 'red';
    } else if (newWidth >= 44 && newWidth < 110) {
        document.getElementById(pokemon).style.backgroundColor = 'orange';
    } else {
        document.getElementById(pokemon).style.backgroundColor = '#70F8A8';
    }
}