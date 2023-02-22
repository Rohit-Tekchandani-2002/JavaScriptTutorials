// Dom Manipulation
// Event Probagation

/* 
3 Phases
1.Event Capturing
2.Target
3.EventBubbling
*/

// 1.Event Capturing
window.addEventListener("click",function(){
    console.log('Window');
},true);

document.addEventListener("click",function(){
    console.log('Document');
},true);

document.querySelector('.div2').addEventListener("click",function(e){
    // e.stopPropagation();
    console.log('Div 2');
},true);

document.querySelector('.div1').addEventListener("click",function(){
    console.log('Div 1');
},true);

document.querySelector('.button').addEventListener
("click",function(e){
    console.log(e.target.innerText = 'clicked!');
},false);

// 2.Target 3.EventBubbling
window.addEventListener("click",function(){
    console.log('Window');
},false);

document.addEventListener("click",function(){
    console.log('Document');
},false);

document.querySelector('.div2').addEventListener("click",function(e){
    // e.stopPropagation();
    console.log('Div 2');
},false);

document.querySelector('.div1').addEventListener("click",function(){
    console.log('Div 1');
},{once: true});

document.querySelector('.button').addEventListener
("click",function(e){
    e.preventDefault();
    console.log(e.target.innerText = 'clicked!');
},false);
