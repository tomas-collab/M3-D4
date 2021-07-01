let allData = []
function loadData(){

 fetch('https://striveschool-api.herokuapp.com/books',)
   .then((response) => response.json())
   .then((books) =>{

     for( let book in books){
       allData[book] = {
         image:books[book].img,
         title:books[book].title,
         price:books[book].asin,

       }
     }
     console.log('extracted',allData);

     
    renderCard()

})

}


function renderCard(){
let bookContainer= document.getElementById('card')


allData.forEach(book => {

     let booksCard = document.createElement('div')
       booksCard.innerHTML = 
     `
<div class="card m-3">
<img src="${book.image}" style="height: 250px; width: 259px;" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title text-truncate">${book.title}</h5>
<button class="btn btn-success" onclick="addToCart(${book.price})">add to Cart</button>
</div>
</div>
`
bookContainer.appendChild(booksCard)

})
}

function removeCard(){
let removeBook = document.getElementById('btn-success')
let button = removeBook[book]
button.addEventListener('click', function(event){
let buttonClicked = event.target
buttonClicked.parentElement.parentElement.remove()

})
}