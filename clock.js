function myClock() {


    //create a new date obj with current date+time
    let today = new Date();

    // returns the weekdays of a range 0-6
    let day = today.getDay();

    //get hours 0-23
    let hour = today.getHours();

    //get minutes 0-60
    let minute = today.getMinutes();

    // get seconds 0-60
    let second = today.getSeconds();


                //define the AM & PM prefixes depends on time in  USA format
                // define empty variable
                // let meridiem;

                //define when it should show AM or PM text
                // if (hour >= 12) {
                //     meridiem = "PM";
                // } else {
                //     meridiem = "AM";
                // };


                //correction of the formating for AM/PM 
                // if (hour >= 13) {
                //     hour = hour - 12
                // };

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }


    // define text print layout
    let Clock = hour +" : " + minute + " : " + second

    document.getElementById('showClock').innerHTML = Clock;
}
// setting interval 1second = 1000ms 
setInterval(myClock, 1000);
//function run
myClock()