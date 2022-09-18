const stories = {
    render: ()=>{

        const urlApi = 'https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=84657f7ccacfe7d20aeabe51c7bb15dahash=5f8bca92dbc0a2b6828a35392e7162f1'
        const container = document.querySelector("#marvel-row");
        let contentHTML = '';

        fetch(urlApi)
        .then(response => response.json())
        .then((json)=>{
            console.log(json, 'response.json')
            for (const storie of json.data.results){
                let urlStorie = storie.urls[0].url;

                contentHTML += `
                <div class="card" style="width: 18rem;" id="comics_card">
                    <img class="card-img-top" src="${storie.thumbnail.path}.${storie.thumbnail.extension}" alt="${storie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${storie.title}</h5>
                        <p class="card-text">...</p>
                        <div id="boton">
                            <a href="${urlStorie}" class="btn btn-primary">Más info</a>
                        </div>
                    </div>
                </div>`;
            }
            container.innerHTML = contentHTML;
        })
        
    }
}

series.render();
