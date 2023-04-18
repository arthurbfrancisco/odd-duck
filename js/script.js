'use strict';

let duckArray = [];

let myContainer = document.querySelector('section');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let viewResultsBtn = document.querySelector('section ~ div')

let counter = 0;
let maxCounter = 25; //25

function Duck(name, fileExtension = 'jpg') {
    this.name = name;
    this.src = `image/${name}.${fileExtension}`;
    this.views = 0;
    this.votes = 0;
}

let bags = new Duck('bag');
let bananacutter = new Duck('banana');
let bathroomholder = new Duck('bathroom');
let bootsyellow = new Duck('boots');
let breakfastoven = new Duck('breakfast');
let meatballbubblegum = new Duck('bubblegum');
let redhair = new Duck('chair');
let monstercthulhu = new Duck('cthulhu');
let dogmouth = new Duck('dogduck');
let meatdragon = new Duck('dragon');
let pens = new Duck('pen');
let sweeper = new Duck('sweep', 'png');
let scissorcutter = new Duck('scissors');
let sharkpillow = new Duck('shark');
let tauntaunblanket = new Duck('tauntaun');
let cannedunicorn = new Duck('unicorn');
let pitchwater = new Duck('watercan');
let glasswine = new Duck('wineglass');

duckArray.push(bags, bananacutter, bathroomholder, bootsyellow, breakfastoven, meatballbubblegum, redhair, monstercthulhu, dogmouth, meatdragon, pens, sweeper, scissorcutter,  sharkpillow, sharkpillow, tauntaunblanket, cannedunicorn, pitchwater,glasswine,)    ;

// console.log(duckArray);

// - get a random number to use with duck array to get a random duck
function renderDucks(){
    // let duck1 = selectRandomDuckNumber();
    // let duck2 = selectRandomDuckNumber();
    // let duck3 = selectRandomDuckNumber();
    // console.log(duck1, duck2, duck3);
    let selectedImages = [];
    while(selectedImages.length < 3){
     let randomIndex = Math.floor(Math.random() * duckArray.length);
     if (!selectedImages.includes(randomIndex)) {
        selectedImages.push(randomIndex);
      }
    //   console.log(randomIndex);
    }
let imageOneIndex = selectedImages.shift();
let imageTwoIndex = selectedImages.shift();
let imageThreeIndex = selectedImages.shift();

    image1.src = duckArray[imageOneIndex].src;
    image1.alt = duckArray[imageOneIndex].name;
    duckArray[imageOneIndex].views++;
    image2.src = duckArray[imageTwoIndex].src;
    image2.alt = duckArray[imageTwoIndex].name;
    duckArray[imageTwoIndex].views++;
    image3.src = duckArray[imageThreeIndex].src;
    image3.alt = duckArray[imageThreeIndex].name;
    duckArray[imageThreeIndex].views++;
    }

function handleDuckClick(event) {
    counter++;
    console.log(event.target.alt);
    let clickedDuck = event.target.alt;
    // find a the goat instance in the goat array whose name property equals the clickedGoat value.
    for (let i = 0; i < duckArray.length; i++) {
        if (clickedDuck === duckArray[i].name) {
            duckArray[i].votes++;
            console.log(duckArray);
        }
    }
    // check to see if the round has ended
    if (counter < maxCounter) {
        // the round can continue, new goats should render
        renderDucks();
    } else {
        // After voting rounds have been completed, remove the event listeners on the product.
        myContainer.removeEventListener('click', handleDuckClick);
        // make the button clickable
        viewResultsBtn.addEventListener('click', viewResults);
        // stop the game and render the results
    }
}

function viewResults() {
    let ul = document.querySelector('ul');
    for (let i = 0; i < duckArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${duckArray[i].name} had ${duckArray[i].views} views and ${duckArray[i].votes} votes.`;
        ul.appendChild(li);
    }

}

renderDucks();

// event listener on myContainer, for clicks,
// my event handler is handleGoatClick

myContainer.addEventListener('click', handleDuckClick);