let pokemonRepository = (function(){
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
    return{
        getAll: function() {
            return pokemonList;
        },
        add: function(pokemon){
            if (typeof pokemon === 'object' && 'name' in pokemon && 'height' in pokemon && 'types' in pokemon){
                pokemonList.push(pokemon);
            } else {
                console.log('Invalid Pokemon object');
            }
        }
    };
})();    
pokemonRepository.getAll().forEach(function(pokemon){
    let output = pokemon.name + '(height:' + pokemon.height + ')';

    if (pokemon.height > 6.0) {
        output += "-wow, that's big";
    }
    document.write(output + '<br>');
});