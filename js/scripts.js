let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 7,
        types: ['grass', 'poison']
    },
    {
        name: 'dauda',
        height: 9,
        types: ['water', 'rat']
    },
    {
        name: "jaho",
        height: 4,
        type: ['sugar', 'light']


    }

];
for (let i = 0; i < pokemonList.length; i++){
    let pokemon = pokemonList[i];
    let displayString = pokemon.name + '(height: ' + pokemon.height + ')';
    if (pokemon.height > 6) {
        displayString += ' - wow, that!\'s big';
    }

    document.write(displayString + '<br>');
}
 
