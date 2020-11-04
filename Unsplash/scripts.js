let container = document.getElementById('container');
let query = 'car';
let url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=ZV731KyNEW-rxKtTzsOxbPQTkzUAD7MyvQbtSyHz3cw`



function search(){
    query = document.getElementById('search').value || 'car';
    url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=ZV731KyNEW-rxKtTzsOxbPQTkzUAD7MyvQbtSyHz3cw`
    container.innerHTML = '';

    fetch(url)
        .then(res =>  res.json())
        .then(res => {
            for(let i = 0; i < res.results.length; i++){
                console.log(res.results[i]);
                
                let card = document.createElement('div')
                let img = document.createElement('img');
                let description = document.createElement('p');
                

                card.setAttribute('class', 'card');
                description.setAttribute('id', 'description')

                img.src = res.results[i].urls.full;
                description.innerText = res.results[i].description;

                card.appendChild(img); 
                card.appendChild(description);

                container.appendChild(card);
            }
        });
    
    console.log(query);
}
window.onload = search;
