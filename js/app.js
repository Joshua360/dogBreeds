const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------


fetch('https://dog.ceo/api/breeds/list')
    .then(response =>response.json())
    .then(data => generateBreedList(data.message))
    .catch(error=>console.log(error))

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => generateImage(data.message))
  .catch(error=>console.log(error))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateBreedList(breeds){

  const options = breeds.map(breed =>

    `<option value="${breed}">${breed}</option>`
  ).join('');

  select.innerHTML = options;


  
}

function generateImage(data){
  const html = `
  <img src="${data}" alt>
  <p> Click to view images of ${select.value}</p>

`;
  
  card.innerHTML = html;

}

function fetchBreedImage(){
  const img = card.querySelector('img');
  const p = card.querySelector('p');
  const selectedBreed = select.value;

  fetch(`https://dog.ceo/api/breed/${selectedBreed




}/images/random`)
      .then(response => response.json())
      .then(data=> {
        img.src = data.message;
        img.alt = selectedBreed;
        p.textContent = `Click to view more images of ${selectedBreed}`
      })


}
    

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener("change", fetchBreedImage);
card.addEventListener('click', fetchBreedImage);

// ------------------------------------------
//  POST DATA
// ------------------------------------------

