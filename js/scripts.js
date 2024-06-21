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
        listItem.classList.add('list-group-item');


        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-primary', 'pokemon-button');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemonModal');

        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
        button.addEventListener('click', function() {
            showDetails(pokemon);


        } );
        
    }
    function showDetails(pokemon){
        loadDetails(pokemon).then(function() {
            showModal(pokemon);

 
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
        function loadDetails (pokemon){
            showLoadingMessage();
            let url = pokemon.detailsUrl;
            return fetch(url)
                .then (function(response){
                    return response.json();

                })
                .then(function (details){
                    hideLoadingMessage();
                    pokemon.imageUrl= details.sprites.front_default;
                    pokemon.height = details.height;
                }) 
                .catch(function(e){
                    hideLoadingMessage();
                    console.error(e);
            
               }); 
        }
        
        function showModal(pokemon){ 
            let modal = document.getElementById('pokemonModal');
        
            let modalTitle = document.querySelector('#exampleModalLabel');
            let modalBody = document.querySelector('.modal-body');
            let pokemonImage = document.querySelector('#pokemonImage');
            let pokemonHeight = document.querySelector('#pokemonHeight');


            modalTitle.innerText = pokemon.name;
            pokemonImage.src = pokemon.imageUrl;
            pokemonHeight.innerText = `height: ${pokemon.height}`;

            modalBody.innerHTML = '';
            modalBody.appendChild(pokemonImage);
            modalBody.appendChild(pokemonHeight);
                      
            ('#pokemonModal').modal('show');
            
            



            let span = document.getElementsByClassName('close')[0];

            document.getElementById('pokemonName').innerText = pokemon.name;
            document.getElementById('pokemonImage').src =pokemon.imageUrl;
            document.getElementById('pokemonHeight').innerText = `Height: ${pokemon.height}`;
            modal.style.display ='block';
            span.onclick = function(){
                modal.style.display ='none';
            }
            window.onclick = function(event){
                if (event.target == modal){
                    modal.style.display = 'none';   
                }
            }
            document.onkeydown = function(event){
                if (event.key === "Escape"){
                    modal.display = 'none';

                }
            }
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
