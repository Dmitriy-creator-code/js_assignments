class App {
    
    constructor (selector1) {
        this.section = document.querySelectorAll (selector1);
    }
    
    
    activation () {
        this.section.forEach(function(section){
            const li = section.querySelectorAll ('li');
            li.forEach(function(elem) {
                console.log(elem);
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
aboutThisApp.activation();


