var addbutton = document.querySelector('.addbookbtn')
var formcont = document.querySelector('.addform')
var cancel = document.querySelector('.cancel');
var overlay = document.querySelector('.overlay')

addbutton.addEventListener('click',()=> {
    formcont.classList.remove('hidden');
    overlay.classList.remove('hidden');
formcont.style.display = 'block';});

cancel.addEventListener('click',()=>{closeForm()});



function closeForm() {
    formcont.classList.add('.hidden');
    overlay.classList.add('hidden');
    formcont.style.display = 'None';
  }

overlay.addEventListener('click',()=>
{formcont.classList.add('.hidden');
overlay.classList.add('hidden');
formcont.style.display = 'None';})