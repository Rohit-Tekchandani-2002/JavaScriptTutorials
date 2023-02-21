// DOM Manipulation

// Selecting, styling and modifying Attributes
{
    //Selecting Elements
    // getElementById() 
    const title = document.getElementById('main-heading');
    console.log(title);

    // getElementByClassName() 

    const listItems = document.getElementsByClassName('list-items');
    console.log(listItems);

    // getElementsByTagName()

    const listItem = document.getElementsByTagName('li');
    console.log(listItem);

    // querySelector

    const container = document.querySelector('div');
    console.log(container);

    // querySelectorAll()

    const Container = document.querySelectorAll('div');
    console.log(Container);

    //Styling an Element

    const Title = document.querySelector('#main-heading');
    title.style.color = 'lightblue';

    const ListItems = document.querySelectorAll('.list-items');
    for (i = 0; i < ListItems.length; i++) {
        ListItems[i].style.fontSize = '1.3rem';
    }

    //Basics

    const firstListItem = document.querySelector('.list-items');
    console.log(firstListItem.getAttribute('class'));

    console.log(firstListItem.innerText);
    console.log(firstListItem.textContent);
    console.log(firstListItem.innerHTML);

    //Creating Elements

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    //Adding Elements

    ul.append(li);

    //Modifiying the text

    li.innerText = 'X-men';

    //MOdifying Attributes & Classes

    li.setAttribute('id', 'main-heading');
    li.removeAttribute('id');

    li.classList.add('list-items');
    console.log(li.classList.contains('list-items'));

    li.classList.remove('list-items');
    console.log(li.classList.contains('list-items'));

    // Removeing Elements

    li.remove();
}

// Traversing Dom
{
    //Parent Node Traversal

    let UL = document.querySelector('ul');

    console.log(UL.parentNode.parentNode); // Grand Parent
    console.log(UL.parentElement.parentElement); // Grand Parent

    //Node vs Element

    const html = document.documentElement;

    console.log(html.parentNode);
    console.log(html.parentElement);

    //Child Node Traversal

    console.log(UL.childNodes);
    console.log(UL.firstChild);
    console.log(UL.lastChild);

    // UL.childNodes[1].style.backgroundColor = 'lightblue';

    console.log(UL.children);
    console.log(UL.firstElementChild);
    console.log(UL.lastElementChild);

    //Sibling Node Traversal

    let Ul = document.querySelector('ul');
    const div = document.querySelector('div');

    console.log(Ul.childNodes);
    console.log(Ul.previousSibling);
    console.log(Ul.nextSibling);

    console.log(Ul.children);
    console.log(Ul.previousElementSibling);
    console.log(Ul.nextElementSibling);
}