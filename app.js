//grab body of page when im finish append to body
const body = document.querySelector('body');
console.log(body);

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

const card = document.createElement('div')
//add class called card
card.classList.add('card')
card.style.width = '18rem';
console.log(card)

//not on page yet because we havent append yet
//create img tag
const image = document.createElement('img');
image.src = 'https://live.staticflickr.com/34/122530930_6e16f1eb5c.jpg';

image.classList.add('card-img-top');
//if using 
image.alt = 'Cat';
console.log(image);
//append card and image


body.appendChild(card);
card.appendChild(image);


//add those classes and append to div

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent = 'Cat'

const cardPargraph = document.createElement('p');
cardPargraph.classList.add('card-text');
cardPargraph.textContent = 'This is my friend.'

const link = document.createElement('a')
link.classList.add('btn', 'btn-primary');

link.href = 'https://www.flickr.com/photos/yukariryu/122530930';
link.target = '_blank';
link.textContent = 'go to title';

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardPargraph);
cardBody.appendChild(link);
card.appendChild(cardBody);
