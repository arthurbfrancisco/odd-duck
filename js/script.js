'use strict';
// Declare an array to store duck objects
let duckArray  = [];
let indexArray =[];
let DuckArrayStorage = localStorage.getItem('duckArray');
if (DuckArrayStorage) {
    duckArray = JSON.parse(DuckArrayStorage);
} else {
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
    let sweeper = new Duck('sweep','png');
    let scissorcutter = new Duck('scissors');
    let sharkpillow = new Duck('shark');
    let tauntaunblanket = new Duck('tauntaun');
    let cannedunicorn = new Duck('unicorn');
    let pitchwater = new Duck('watercan');
    let glasswine = new Duck('wineglass');
    duckArray.push(bags, bananacutter, bathroomholder, bootsyellow, breakfastoven, meatballbubblegum, redhair, monstercthulhu, dogmouth, meatdragon, pens, sweeper, scissorcutter, sharkpillow, sharkpillow, tauntaunblanket, cannedunicorn, pitchwater, glasswine);
}
// Get a reference to the section element in the DOM
let myContainer = document.querySelector('section');
// Get references to the first, second and third image elements inside the section
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
// Get a reference to the view results button
let viewResultsBtn = document.querySelector('section ~ div')
// Initialize a counter for the number of clicks and the 
let counter = 0;
let maxCounter = 25; //25
// Define the Duck constructor , declare the default value
function Duck(name, fileExtension = 'jpg') {
    this.name = name;
    this.src = `image/${name}.${fileExtension}`;
    this.views = 0;
    this.votes = 0;
}
// Create new Duck objects
// Check if there's data in local storage
// if (localStorage.getItem('duckArray')) {
//     // Retrieve the duckArray from local storage
//     let storedDuckArray = JSON.parse(localStorage.getItem('duckArray'));

//     // Reconstruct duck objects with prototype methods if necessary and store them in duckArray
//     for (let i = 0; i < storedDuckArray.length; i++) {
//         let duck = new Duck(storedDuckArray[i].name);
//         duck.views = storedDuckArray[i].views;
//         duck.votes = storedDuckArray[i].votes;
//         duckArray.push(duck);
//     }
// } else {
//     // Create new Duck objects and store them in duckArray
//     // Add the created Duck objects to the duckArray, instances push to the array
//     localStorage.setItem('duckArray', JSON.stringify(duckArray));
// }
// // Add the created Duck objects to the duckArray, instances push to the array
// // Function to render ducks on the page
// // - get a random number to use with duck array to get a random duck

function renderDucks() {
    indexArray = [];
    // let duck1 = selectRandomDuckNumber();
    // let duck2 = selectRandomDuckNumber();
    // let duck3 = selectRandomDuckNumber();  
    // console.log(duck1, duck2, duck3);
    while (indexArray.length < 6) {
        let randomIndex = Math.floor(Math.random() * duckArray.length);
        //haystack.push(randomIndex, duckArray[randomIndex]);
        if (!indexArray.includes(randomIndex)) {
            indexArray.push(randomIndex);
        }
    }
    //   console.log(randomIndex);

    let imageOneIndex = indexArray.shift(); //25
    let imageTwoIndex = indexArray.pop(); //25
    let imageThreeIndex = indexArray.shift(); //25

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
// Function to handle clicks on duck images, event listener.
function handleDuckClick(event) {
    if (event.target.tagName === 'IMG') {
        counter++;
        console.log(event.target.alt);
        let clickedDuck = event.target.alt;
    // counter++;
    // console.log(event.target.alt);
    // let clickedDuck = event.target.alt;
    // find a the goat instance in the goat array whose name property equals the clickedGoat value.
    for (let i = 0; i < duckArray.length; i++) {
        if (clickedDuck === duckArray[i].name) { // if the duck is already  clicked then just return.
            duckArray[i].votes++;   // increment
            console.log(duckArray); // increment  the number of          
        }
    }
    // check to see if the round has ended
    if (counter < maxCounter) {
        // localStorage.setItem('duckArray', JSON.stringify(duckArray));

        // the round can continue, new goats should render
        renderDucks();
    } else {
        // After voting rounds have been completed, remove the event listeners on the product.
        myContainer.removeEventListener('click', handleDuckClick);
        // make the button clickable
        viewResultsBtn.addEventListener('click', viewResults); //invoke the view result
        // stop the game and render the results

        renderCharts();
        // myContainer.addEventListener('click', renderCharts);ß
    }
 }
}
// Function to display the results after voting rounds are completed
function viewResults() {
    let ul = document.querySelector('ul');
    for (let i = 0; i < duckArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${duckArray[i].name} had ${duckArray[i].views} views and ${duckArray[i].votes} votes.`;
        ul.appendChild(li);
    }
}
// Call renderDucks function to display initial ducks
// Add an event listener to handle clicks on the duck images
//  function renderCharts
function renderCharts() {
    // console.log(duckArray);
    // Charts
    const ctx = document.getElementById('myChart'); //window to the DOM element

//empty array for ducks chart, pushings chart
    let duckNames = [];
    let duckVotes = [];
    let duckViews = [];
//This is a for loop that iterates through the duckArray object. For each object 
//in the duckArray, the code extracts the duck's name, votes, and views and adds
//them to the corresponding arrays. This loop also logs the current values of the 
//duckNames, duckVotes, and duckViews arrays to the console.
    for (let i = 0; i < duckArray.length; i++) {
        console.log(duckArray[i]);

        let name = duckArray[i].name;
        duckNames.push(name);

        duckVotes.push(duckArray[i].votes);
        duckViews.push(duckArray[i].views);
        console.log(duckNames);
        console.log(duckVotes);
        console.log(duckViews); 

        }

        let config = {
            type: 'bar',
            data: {
                labels: duckNames,

                datasets: [

                    {
                        label: '# of Votes',
                        data: duckVotes,
                        borderWidth: 1,
                          backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                    },
                    {
                        label: '# of Views',
                        data: duckViews,
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                    }

                ],

            },


            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
//create and instance rendering using charts.js
        new Chart(ctx, config);
       };

//Finally, the code creates a new instance of the Chart.js 
//library, passing in the configuration object and a reference to the
// HTML canvas element that the chart should be rendered into. The code then 
//calls the renderDucks() function to initially render the chart, and sets up 
//an event listener on a container element (myContainer) for clicks on the chart 
//(handleDuckClick).
    renderDucks();
    myContainer.addEventListener('click', handleDuckClick);
   

























    //    
//   // get the data our of local storage use it
  
//   function pageload() {
// // get the data out of local storage with the key
// // "setting " is our key
// let savedSettings = localStorage.getItem("setting");
// console.log(savedSettings)
// if (savedSettings){
//   console.log(savedSettings)
// settings = JSON.parse(savedSettings);
// console.log(settings);
// if (settings.darkmode){
//   enterDarkMode();
// }else{

// }else{
//   return;
//  }
// }

// //save setting to the local storage
//  //functions saveSettings(){
// //take the date and turn it into a string to store
//     let stringify = JSON.stringify(settings);
// console.log(stringify);
// // put in in local storage with a label AKA:key
// // "settings" is our key 1. Key string 2. the date as a string
// // SET ITEMES take 2 argument:
//     localStorage.setItems('settings', stringify)
    
//   }
// //JSON.parse  ()
//   //bottom page
//   //load page
//   pageLoad();
// 

/*user come to page
product load
user voter25 times
results dispaly
user leave
 user comeback
 at what point in this process should we put date in local storagte
 at what pint should we get data from local storage
 
 at what pooino you create products
 what isfd there are products already in local storage
 */