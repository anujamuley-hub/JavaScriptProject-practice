const buttons  = document.querySelectorAll('.button');
const body= document.querySelector('body');

buttons.forEach(function(button){
console.log(button);

button.addEventListener('click' , function(cr){
    console.log(cr)
    console.log(cr.target)

    if(cr.target.id === 'black'){
        body.style.backgroundColor = cr.target.id ;
    }

     if(cr.target.id === 'blue'){
        body.style.backgroundColor = cr.target.id ;
    }

     if(cr.target.id === 'grey'){
        body.style.backgroundColor = cr.target.id ;
    }
     if(cr.target.id === 'yellow'){
        body.style.backgroundColor = cr.target.id ;
    }

});
});
