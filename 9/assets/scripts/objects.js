const addBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieCollection = [];

function renderCollection () {
    const ul = document.getElementById('movie-list');
    const li = document.createElement('li');
    const list = ul.appendChild(li);
    
    movieCollection.forEach(function(elem){
        list.innerHTML = elem.info.title + " " + elem.info.name + " " + elem.info.value;
        console.log(elem);
    })
    ul.classList.add ('visible');

}

function infoCollection () {
    const title = document.getElementById('title').value;
    const name = document.getElementById('extra-name').value;
    const value = document.getElementById('extra-value').value;

    let movie = {
        id: Math.random(),
        info: {
                title: title,
                name: name,
                value: value  
            }
        }
    movieCollection.push(movie);
    console.log(movieCollection);
}

addBtn.addEventListener ('click', infoCollection);
addBtn.addEventListener('click', renderCollection);