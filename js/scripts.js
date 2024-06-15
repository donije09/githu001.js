let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    
    

    function getAll(){
        return pokemonList;
    }
    function add(pokemon){
        if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon){
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
        loadDetails(pokemon).then(function(){
        console.log(pokemon);
    });

    }
    
    function showLoadingMessage(){
        let loadingMessage = document.createElement('p');
        loadingMessage.innerText = 'loading...';
        loadingMessage.classList.add('loading-message');
        document.body.appendChild(loadingMessage);
    }

    function hideLoadingMessage(){
        let loadingMessage = document.querySelector('.loading-message');
        if (loadingMessage) {
            loadingMessage.remove();
        }
    }

        
        function loadList (){
            showLoadingMessage();
            return fetch(apiUrl)
                .then(function(response){
                    return response.json();

                })
                .then(function (json){
                    hideLoadingMessage();
                    json.results.forEach(function (item){
                        let pokemon = {
                            name: item.name,
                            detailsUrl: item.url
                        };
                        add (pokemon);
                    });
                })
                .catch(function(e){
                    hideLoadingMessage();
                    console.error(e);
            
               });

        }
        function loadDetails (){
            showLoadingMessage();
            let url = pokemon.detailsUrl;
            return fetch(url)
                .then (function(response){
                    return response.json();

                })
                .then(function (details){
                    hideLoadingMessage();
                    pokemon.imageUrl= details.sprites.front_default;
                    pokemon.hide =details.height;
                }) 
                .catch(function(e){
                    hideLoadingMessage();
                    console.error(e);
            
               }); 
        }      

        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails


        };
})();
        

pokemonRepository.loadList().then(function (){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });

});