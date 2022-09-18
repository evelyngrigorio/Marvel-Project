const characters = {
    render: ()=> {

        const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=84657f7ccacfe7d20aeabe51c7bb15da&hash=5f8bca92dbc0a2b6828a35392e7162f1';
        const container = document.querySelector("#marvel-row");
        let contentHTML = '';

        fetch(urlApi)
        .then(response => response.json())
        .then((json)=>{
            console.log(json, 'response.json')
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML += `
                <div class="card" style="width: 18rem;" id="characters_card">
                    <img class="card-img-top" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
                    <div class="card-body">
                        <h5 class="card-title">${hero.name}</h5>
                        <h6>Series en que apareció ${hero.name}:</h6>
                        <ul>
                            <li></li>
                        </ul>
                        <div id="boton">
                            <a href="${urlHero}" class="btn btn-primary">Más info</a>
                        </div>
                    </div>
                </div>`;
            }
        container.innerHTML = contentHTML;
        })
    }
};

characters.render();