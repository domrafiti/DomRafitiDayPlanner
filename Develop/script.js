//Variable Declaration
var currentDate = moment().format('MMMM Do, YYYY');
var saveButton = $(".save-button");
var textareaColor = document.querySelectorAll('textarea');
var timeCheck = (moment().startOf('day').fromNow()).replace(" hours ago", "");
var timeEval = document.getElementsByTagName('textarea');
var availableTimes = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18']

//Setting the Date on the page
document.getElementById('currentDay').textContent = currentDate;

//saving the user input when the save button is clicked
saveButton.on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".schedule").val();
    localStorage.setItem(time, value);
})

//this function evaluates the current time against the appointment window and sets the appropriate color
function setColor() {
    for (let i = 0; i < availableTimes.length; i++) {

        if (parseInt(availableTimes[i]) > parseInt(timeCheck)) {
            console.log("Future");
            timeEval.item(i).setAttribute("class", "col-sm-10 schedule future");
        } else if (parseInt(availableTimes[i]) < parseInt(timeCheck)) {
            console.log("Past");
            timeEval.item(i).setAttribute("class", "col-sm-10 schedule past");
        } else if (parseInt(availableTimes[i]) == parseInt(timeCheck)) {
            console.log("Present");
            timeEval.item(i).setAttribute("class", "col-sm-10 schedule present");
        }
    }
}

//function initializes webpage by getting any items from local storage and then call set color function
function init() {
    //set values from local storage
    for (let i = 0; i < availableTimes.length; i++) {
        var appointmentData = localStorage.getItem(availableTimes[i]);
        //only setting values if the value is not null
        if (appointmentData) {
            textareaColor[i].textContent = appointmentData;
        }
    }
    setColor();
}

//function resets the page for a new day
function newDay() {
    localStorage.clear();
    location.reload();
    init();
};
//calls init function to start the whole process.
init();