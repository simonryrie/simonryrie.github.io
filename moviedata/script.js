let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

// first extract data from array ready for table

let movies = [];
let plots = [];
let casts = [];
let runtimes = [];
let ratings = [];
let years = [];
let spaced = [];

for (let movie in movieData) {
  movies.push(movie);    
  plots.push(movieData[movie].plot);
  casts.push(movieData[movie].cast);
  runtimes.push(movieData[movie].runtime);
  ratings.push(movieData[movie].rating);
  years.push(movieData[movie].year);
};

let castsZero = casts[0]
castsZeroToString = castsZero.toString();
let cZero = castsZeroToString.replaceAll(',', ', ');

let castsOne = casts[1]
castsOneToString = castsOne.toString();
let cOne = castsOneToString.replaceAll(',', ', ');

let castsTwo = casts[2]
castsTwoToString = castsTwo.toString();
let cTwo = castsTwoToString.replaceAll(',', ', ');

let castsThree = casts[3]
castsThreeToString = castsThree.toString();
let cThree = castsThreeToString.replaceAll(',', ', ');


document.querySelectorAll(".title")[0].innerHTML = movies[0];
document.querySelectorAll(".plot")[0].innerHTML = plots[0];
document.querySelectorAll(".cast")[0].innerHTML = cZero;
document.querySelectorAll(".runtime")[0].innerHTML = runtimes[0] + " minutes";
document.querySelectorAll(".rating")[0].innerHTML = ratings[0];
document.querySelectorAll(".year")[0].innerHTML = years[0];

document.querySelectorAll(".title")[1].innerHTML = movies[1];
document.querySelectorAll(".plot")[1].innerHTML = plots[1];
document.querySelectorAll(".cast")[1].innerHTML = cOne;
document.querySelectorAll(".runtime")[1].innerHTML = runtimes[1] + " minutes";
document.querySelectorAll(".rating")[1].innerHTML = ratings[1];
document.querySelectorAll(".year")[1].innerHTML = years[1];

document.querySelectorAll(".title")[2].innerHTML = movies[2];
document.querySelectorAll(".plot")[2].innerHTML = plots[2];
document.querySelectorAll(".cast")[2].innerHTML = cTwo;
document.querySelectorAll(".runtime")[2].innerHTML = runtimes[2] + " minutes";
document.querySelectorAll(".rating")[2].innerHTML = ratings[2];
document.querySelectorAll(".year")[2].innerHTML = years[2];

document.querySelectorAll(".title")[3].innerHTML = movies[3];
document.querySelectorAll(".plot")[3].innerHTML = plots[3];
document.querySelectorAll(".cast")[3].innerHTML = cThree;
document.querySelectorAll(".runtime")[3].innerHTML = runtimes[3] + " minutes";
document.querySelectorAll(".rating")[3].innerHTML = ratings[3];
document.querySelectorAll(".year")[3].innerHTML = years[3];

//Add functionality to add data

let newTitle;
let newPlot;
let newCastOne;
let newCastTwo;
let newCastThree;
let newCastFour;
let castOneWithComma;
let castTwoWithComma;
let castThreeWithComma;
let castFourWithComma;
let newCast;
let newRuntime;
let newRating;
let newYear;

// function to check data inputted is valid

function submitAttempt(){

newTitle = document.getElementById('title').value
newPlot = document.getElementById('plot').value
newCastOne = document.getElementById('castOne').value
newCastTwo = document.getElementById('castTwo').value
newCastThree = document.getElementById('castThree').value
newCastFour = document.getElementById('castFour').value
newRuntime = document.getElementById('runtime').value
newRating = document.getElementById('rating').value
newYear = document.getElementById('year').value

if(newTitle.length === 0) {
  window.alert("Please enter a title.")
}
else if(newPlot.length === 0) {
  window.alert("Please enter a plot.")
}
else if(newCastOne.length === 0 && newCastTwo.length === 0 && newCastThree.length === 0 && newCastFour.length === 0 ) {
  window.alert("Please enter some cast members (min. 1)")
}
else if(newRuntime <= 0 || newRuntime.length > 775) {
  window.alert("Please enter a valid runtime.")
}
else if(newRating.length === 0 || newRating < 0 || newRating > 10) {
  window.alert("Please enter a valid rating.")
} 
else if(newYear <= 1900 || newYear > 3000) {
  window.alert("Please enter a valid year.")
}


else { 
  submitNewMovie()
}
}

// if data is valid, function to submit and add to table

function submitNewMovie() {

newTitle = document.getElementById('title').value
newPlot = document.getElementById('plot').value
newCastOne = document.getElementById('castOne').value
newCastTwo = document.getElementById('castTwo').value
newCastThree = document.getElementById('castThree').value
newCastFour = document.getElementById('castFour').value

if (newCastOne.length > 0) {
  castOneWithComma = `${newCastOne}, `
}
else {
  castOneWithComma = ""
}

if (newCastTwo.length > 0) {
  castTwoWithComma = `${newCastTwo}, `
}
else {
  castTwoWithComma = ""
}

if (newCastThree.length > 0) {
  castThreeWithComma = `${newCastThree}, `
}
else {
  castThreeWithComma = ""
}

if (newCastFour.length > 0) {
  castFourWithComma = `${newCastFour}, `
}
else {
  castFourWithComma = ""
}

let newCastCompile = `${castOneWithComma}${castTwoWithComma}${castThreeWithComma}${castFourWithComma}`;
newCast = newCastCompile.slice(0, -2);

newRuntime = document.getElementById('runtime').value
newRating = document.getElementById('rating').value
newYear = document.getElementById('year').value

const table = document.getElementById("myTable");

let tableRowsCount = table.rows.length

let i = tableRowsCount

let row = table.insertRow(i);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 = row.insertCell(5);

cell1.innerHTML = `${newTitle}`;
cell2.innerHTML = `${newPlot}`;
cell3.innerHTML = `${newCast}`;
cell4.innerHTML = `${newRuntime} minutes`;
cell5.innerHTML = `${newRating}`;
cell6.innerHTML = `${newYear}`;

document.getElementById("newMovie").reset();


}