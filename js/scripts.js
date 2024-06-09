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
 
pokemonList.forEach(function(pokemon) {
    let output = pokemon.name + '(height:' + pokemon.height + ')';

    if (pokemon.height > 6.0) {
        output += "-wow, that's big";
    }
    document.write(output + '<br>');
});