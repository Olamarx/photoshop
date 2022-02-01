let date = document.querySelector('.js')



let Date = new Date();
let Year = getFullYear();
let Month = getMonth();
let Day = getDate();

date.textContent = `Today's date is ${Day} ${Month}, ${Year}.`;