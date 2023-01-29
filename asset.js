var pokemon1 = '';
var pokemon2 = '';

function player_choose_pokemon_1() {
    let value = document.getElementById('player1_choose').value;
    pokemon1 = new Pokemon(value);


    let contentNode = 'Vous avez choisi '  + pokemon1.name.toUpperCase();
    document.getElementById('pokemon_fight_chat').appendChild(newRowChat(contentNode));
    updateScroll();


    // document.getElementById('pokemon_fight_chat').appendChild(div);
    // document.getElementById('pokemon_fight_chat_row').innerHTML = 'Vous avez choisi '  + pokemon1.name.toUpperCase()

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

    // document.getElementById('pokemon_fight_chat_row').innerHTML = 'Votre adversaire a choisi '  + pokemon2.name.toUpperCase()
    document.getElementById('player2_battle_pokemon').src = 'img/pokemon_sprite/' + pokemon2.name + '.gif'
    document.getElementById('player_info_name_2').innerHTML = pokemon2.name
}


function attaquePlayer(pokemon_attaque) {
    let attaque_name = document.getElementById(pokemon_attaque).innerText;
    let attaque1 = new Attaque(attaque_name.toLowerCase());
    
    let contentNode = pokemon1.name.toUpperCase() + ' utilise ' + attaque_name;
    document.getElementById('pokemon_fight_chat').appendChild(newRowChat(contentNode));
    updateScroll();

    let pvLose = calculPvLose(attaque1, 'pokemon1')
    pokemon2.setNewPv(pvLose);

    if (pokemon2.pv <= 0) {
        endMatch('pokemon_info_2_pv')
        let contentNode = 'Vous avez gagné';
        document.getElementById('pokemon_fight_chat').appendChild(newRowChat(contentNode));
        updateScroll();
    } else {
        let newWidth = ((pokemon2.pv * 220) / pokemon2.pvMax);
        barrePv(newWidth, 'pokemon_info_2_pv')
        attaqueBot();
    }    
}

function attaqueBot() {
    setTimeout(
        function() {
            let random_attaque = {0 : 'a1', 1: 'a2', 2: 'a3', 3: 'a4'};
            let attaque_key = Math.floor(Math.random() * 3)
            let attaque_name = pokemon2[random_attaque[attaque_key]];
            let attaque2 = new Attaque(attaque_name.toLowerCase());
            
            let contentNode = pokemon2.name.toUpperCase() + ' utilise ' + attaque_name.toUpperCase();
            document.getElementById('pokemon_fight_chat').appendChild(newRowChat(contentNode));
            updateScroll();

            let pvLose = calculPvLose(attaque2, 'pokemon2')
            console.log(attaque_name);
            pokemon1.setNewPv(pvLose)

            if (pokemon1.pv <= 0) {
                endMatch('pokemon_info_1_pv')
                let contentNode = 'Vous avez perdu';
                document.getElementById('pokemon_fight_chat').appendChild(newRowChat(contentNode));
                updateScroll();
            } else {
                let newWidth = ((pokemon1.pv * 220) / pokemon1.pvMax);    
                barrePv(newWidth, 'pokemon_info_1_pv')
                document.getElementById('pokemon_info_pv_value_1').innerHTML = pokemon1.pv +'/'+pokemon1.pvMax;
            }
        }, 600);
}



function calculPvLose(attaque, pokemon) {
    let pvLose = 0;    
    if (pokemon == 'pokemon1') {
        pvLose = ((((pokemon1.niveau * 0.4)+2)* pokemon1.attaque * attaque.power) / (pokemon2.defense * 50)) + 2
    } else {
        pvLose = ((((pokemon2.niveau * 0.4)+2)* pokemon2.attaque * attaque.power) / (pokemon1.defense * 50)) + 2
    }
    console.log(Math.round(pvLose))
    return Math.round(pvLose);
}



//  USEFULL
function endMatch(pokemon) {
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

function newRowChat(contentNode) {
    let div = document.createElement('div');
    div.id = 'pokemon_fight_chat_row';
    div.className = 'pokemon_fight_chat_row'
    let date = new Date();

    let textNode = document.createTextNode(date.getMinutes() + ':' + date.getSeconds() + ' = ' + contentNode);
    div.appendChild(textNode);
    return div;



}

function updateScroll(){
    let element = document.getElementById("pokemon_fight_chat");
    element.scrollTop = element.scrollHeight;
}