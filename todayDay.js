function myDay() {

//create a new date obj with current date+time
let today = new Date();

// returns the weekdays of a range 0-6
let day = today.getDay();

//array with a list of weekday (names)
let daylist = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// testing day display
// console.log (daylist[day]);


// define text print layout
let myDay = "Today is " + daylist[day]

document.getElementById('showDay').innerHTML = myDay;

}
myDay()