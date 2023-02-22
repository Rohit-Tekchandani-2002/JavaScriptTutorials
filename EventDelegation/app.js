// Dom Manipulation
// Event Deleligation

/* 
It allows users to append a SINGLE event listener to a 
parent element that adds it to all its present AND future
descendants/childs that match a selector. 
*/

/*
{
    document.querySelector('#football').addEventListener('click', function(e){
        console.log('football is clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightblue';
        }
    });
    
    document.querySelector('#basketball').addEventListener('click', function(e){
        console.log('basketball is clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightblue';
        }
    });
    
    document.querySelector('#boxing').addEventListener('click', function(e){
        console.log('boxing is clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightblue';
        }
    });
    
    document.querySelector('#tennis').addEventListener('click', function(e){
        console.log('tennis is clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightblue';
        }
    });
}
*/

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'lightblue';
    }
});

const sports = document.querySelector('#sports');
const newsport = document.createElement('li');

newsport.innerText = 'chess';
newsport.setAttribute('id','chess');

sports.appendChild(newsport);