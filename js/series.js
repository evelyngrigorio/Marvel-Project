const series = {
    render: ()=> {

        const urlApi = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=84657f7ccacfe7d20aeabe51c7bb15da&hash=5f8bca92dbc0a2b6828a35392e7162f1'
        const container = document.querySelector("#marvel-row");
        let contentHTML = '';

        fetch(urlApi)
        .then(response => response.json())
        .then((json)=>{
            console.log(json, 'response.json')
            for (const serie of json.data.results){
                let urlSerie = serie.urls[0].url;

                contentHTML += `
                <div class="card" style="width: 18rem;" id="comics_card">
                    <img class="card-img-top" src="${serie.thumbnail.path}.${serie.thumbnail.extension}" alt="${serie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${serie.title}</h5>
                        <p class="card-text">...</p>
                        <div id="boton">
                            <a href="${urlSerie}" class="btn btn-primary">Más info</a>
                        </div>
                    </div>
                </div>`;
            }
            container.innerHTML = contentHTML;
        })
        
    }
}

series.render();