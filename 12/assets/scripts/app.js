class App {
    
    constructor (selector1) {
        this.section = document.querySelectorAll (selector1);
    }

    moving () {
        
        const list = document.querySelectorAll ('ul');
        list.forEach(function(list){
            const item = document.querySelectorAll ('li');
            
            item.forEach(function(item){
                
                item.addEventListener('dragstart', function(event){
                    event.dataTransfer.setData ("text/plain", this.id);
                    event.dataTransfer.effectAllowed = 'move';
                })
            })

            list.addEventListener ('dragenter', function(event){
                event.preventDefault();          
            }) 
            list.addEventListener ('dragover', function(event){
                event.preventDefault();
            })
            list.addEventListener ('dragleave', function(event){
                event.preventDefault();
            })
            list.addEventListener ('drop', function(event){
                const linkId = event.dataTransfer.getData('text/plain');
                document.getElementById(linkId).querySelector('button:last-child').click();
            })

        })

        
    }
    
    moreInfo () {
        this.section.forEach(function(section){
            const ul = section.childNodes[3];
            const li = ul.querySelectorAll ('li');
            li.forEach (function(li){
                const info = li.querySelectorAll('.alt');
                info.forEach(function(btn){
                    btn.addEventListener('click', function(){
                        let block = document.getElementsByTagName ('body');
                        let div = document.createElement ('div');
                        div.innerHTML = "<h4>Задание - " + li.dataset.extraInfo + "</h4>"; // изменил использование информации с помощью dataset
                        div.setAttribute('class', 'card');
                        li.append(div);
                        console.log(div.getBoundingClientRect());  // не использовал вычисления этого обЪекта
                        div.addEventListener('click', function(){
                            div.parentNode.removeChild(div);    // добавил удаление блока инфо
                        })
                        div.style.width = 250 + "px";
                        div.style.height = 75 + "px";   // изменения стилей 
                        div.style.padding = 2 + "px";
                        div.style.fontSize = 15 + "px";
                    })
                })
                
            })
        })
    }
    activation () {
        this.section.forEach(function(section){
            const li = section.querySelectorAll ('li');
            li.forEach(function(elem) {
                const btn = elem.querySelectorAll('button')[1]; 
                btn.addEventListener ('click', function(){
                    let ul = elem.parentNode.parentNode;
                    if(ul.id == 'active-projects') {
                        const ulFinnaly = document.querySelector ('#finished-projects ul');                            
                        ulFinnaly.appendChild(elem);
                        btn.innerText = 'Activate';
                    } else {
                        const ulFinnaly = document.querySelector ('#active-projects ul');                            
                        ulFinnaly.appendChild(elem);
                        btn.innerText = 'Finish';
                    }                                    
                })                    
            })                    
        })
    }
}



let aboutThisApp = new App("section");
aboutThisApp.moving();
aboutThisApp.moreInfo();
aboutThisApp.activation();


