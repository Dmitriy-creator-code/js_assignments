const addBtn = document.querySelector ('header > button');
const modalWin = document.getElementById ('add-modal');
const backDrp = document.getElementById ('backdrop');
const cancelBtn = document.querySelector ('.modal__actions');
const child = cancelBtn.querySelector ('.btn--passive');
const addModalActionBtn = cancelBtn.querySelector ('.btn--success');
const delWin = document.getElementById ('delete-modal');
const ul = document.querySelector ('#movie-list');
const inputRating = document.querySelector ('#rating');
let listMovieId = [];


addBtn.onclick =  () => {
    modalWin.classList.add('visible');
    backDrp.classList.add ('visible');
}

child.onclick = () => {
    modalWin.classList.remove('visible');
    backDrp.classList.remove ('visible');
}

backDrp.onclick = () => {
    backDrp.classList.remove ('visible');
    modalWin.classList.remove('visible');
    delWin.classList.remove('visible');
}



addModalActionBtn.onclick = () => {
    if (inputRating.value < 1 || inputRating > 5) {
        alert('Введите рейтинг от 1 до 5');
    } else {
        let sectionEntry = document.querySelector ('body > main > section');
        if (sectionEntry) {
            sectionEntry.remove();
        }  
        
        
        listMovieId.push(Math.random());
        
        ul.insertAdjacentHTML("afterbegin","<li class=movie-element><div class=movie-element__image><img src=" 
        + document.getElementById ('image-url').value + " alt=></div><div class=movie-element__info><h2>"
        + document.getElementById ('title').value + "</h2><p>"
        + document.getElementById ('rating').value + "</p></div></li>");
        modalWin.classList.remove('visible');
        backDrp.classList.remove ('visible');
   }
   const removeModalMovie = document.querySelectorAll('li.movie-element');
   for (let i=0; i < removeModalMovie.length; i++) {
        removeModalMovie[i].id = listMovieId[i];
        removeModalMovie[i].onclick = () => {
            console.log(removeModalMovie[i]);
            console.log(listMovieId[i]);
            delWin.classList.add ('visible');
            backDrp.classList.add ('visible'); 

            let yesBtn = document.querySelector ('#delete-modal').lastElementChild.lastElementChild;  
        
            yesBtn.onclick = () => {
                elem = document.getElementById (listMovieId[i]); 
                console.log(elem); 
                elem.parentNode.removeChild(elem);  
                delWin.classList.remove ('visible');
                backDrp.classList.remove ('visible'); 
            }

            let noBtn = document.querySelector ('#delete-modal').lastElementChild.firstElementChild;
            
            noBtn.onclick = () => {
                backDrp.classList.remove ('visible');
                delWin.classList.remove('visible');
            }
                      
        }
   }
   
   
   
   
    
}