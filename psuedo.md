GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Uses the Moment.js library

as a user i come to a website to review my calendar for the day. 

the calendar will show the hours 7am to 7 pm.

There could be fixed information at the header confirming the date while a portion of the window scrolls

the web page will reference the time on the device i am using to determine if the events have happened in the past and color them gray; highlight them in yellow or red if they are current; and highlight them in green if they are in the future.

to unlock a time slot, i have to click a button on the right which will allow me to edit, and then relock/save the page.

When i close the window, i would like to be able to revisit the page and have it be as i was there last.