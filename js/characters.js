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
                <div class="col-md-3">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h5 class="title">${hero.name}</h5>
                </div>`;
            }
        container.innerHTML = contentHTML;
        })
    }
};

characters.render();