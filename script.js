
let input=document.querySelector('#todo');
let button=document.querySelector('#addbutton');
let list=document.querySelector('#list');
let element =document.getElementsByTagName('li');


button.addEventListener('click', () => {
    let text=input.value;
    if(text === ''){
        alert('Please write something in input box before adding');
    } else {
        let li = document.createElement('li');
        li.innerHTML =text;
        list.insertBefore(li,list.childNodes[0])
        input.value= '';
    }
})


list.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})