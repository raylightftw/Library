var addbutton = document.querySelector('.addbookbtn')
var formcont = document.querySelector('.addform')
var cancel = document.querySelector('.cancel');
var overlay = document.querySelector('.overlay')
var books = document.querySelector('.books')
addbutton.addEventListener('click',()=> {
    formcont.classList.remove('hidden');
    overlay.classList.remove('hidden');
formcont.style.display = 'block';});

cancel.addEventListener('click',()=>{closeForm()});



function closeForm() {
    formcont.classList.add('hidden');
    overlay.classList.add('hidden');
    formcont.style.display = 'None';
  }

overlay.addEventListener('click',()=>
{formcont.classList.add('hidden');
overlay.classList.add('hidden');
formcont.style.display = 'None';})


formcont.addEventListener('submit',function(event) 
  {event.preventDefault();
    console.log("Form submitted");

    var titleInput = document.querySelector('#title');
    var authorInput = document.querySelector('#author');
    var pagesInput = document.querySelector('#pages');
    
    var title = titleInput.value;
    var author = authorInput.value;
    var pages = pagesInput.value;

    var newcard = createCard(title,author,pages);
    books.appendChild(newcard);
    document.querySelector('#addbookform').reset();
    closeForm();
  })


function createCard(title1,author1,pages1)
{
  var card = document.createElement('div');
  card.classList.add('card')
  card.innerHTML = 
  `
    <h1>${title1}</h1>
    <h3>Author: ${author1} </h3>
    <h3>Number of Pages: ${pages1} </h3>
  `;

  return card;
}