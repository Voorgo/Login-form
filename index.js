let anchor = document.querySelectorAll('a')
let cont = document.querySelector('.container')
let allInputs = document.querySelectorAll('input')

anchor.forEach((a) => {
    a.addEventListener('click', function(){
        cont.classList.toggle('active')
        setTimeout(function() { 
            for(let i = 0; i < allInputs.length; i++) {
            if(allInputs[i].type !== 'submit') {
            allInputs[i].value  = ''
            }
        }}, 1000)  
       
    
    })
})

