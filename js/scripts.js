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
            types: ['sugar', 'light']
    
    
        }
    
    ];

    function getAll(){
        return pokemonList;
    }
    function add(pokemon){
        if (typeof pokemon === 'object' && 'name' in pokemon && 'height' in pokemon && 'types' in pokemon){
            pokemonList.push(pokemon);
        } else {
            console.log('Invalid Pokemon object');
        }

    }
            
        

    function addListItem(pokemon) {
        let pokemonListElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
        button.addEventListener('click', function() {
            showDetails(pokemon);


        } );
        
    } 

        function showDetails(pokemon){
            console.log(pokemon);
        }

        return{
            getAll: getAll,
            add: add,
            addListItem: addListItem
        };
})(); 



pokemonRepository.getAll().forEach(function(pokemon){
   pokemonRepository.addListItem(pokemon);
});