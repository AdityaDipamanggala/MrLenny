var first = document.querySelector('#first');
var menuBar = document.querySelector('#menu');
function firstClick () {
    first.classList.add(`click`)
    menuBar.classList.add(`click`)
}
first.onclick = firstClick
var main  = document.querySelector('#main');
function outMain () {
    first.classList.remove(`click`)
    menuBar.classList.remove(`click`)
    appointment.classList.remove(`click`)
}
main.onmouseleave = outMain

var listStory = document.querySelectorAll(`#menu ul li`)[0]
function menu1Hover () {
    listStory.classList.add(`active`)
}
listStory.onmouseenter = menu1Hover
function out1Hover (){
    listStory.classList.remove(`active`)
    story.classList.remove(`click`)
}
listStory.onmouseleave = out1Hover
var story = document.querySelector('#story');
function storyClick () {
    story.classList.add(`click`)
    appointment.classList.remove(`click`)
}
listStory.onclick = storyClick



var listActivity = document.querySelectorAll(`#menu ul li`)[1]
function menu2Hover () {
    listActivity.classList.add(`active`)
}
listActivity.onmouseenter = menu2Hover
function out2Hover (){
    listActivity.classList.remove(`active`)
    activity.classList.remove(`click`)
}
listActivity.onmouseleave = out2Hover
var activity = document.querySelector('#activity');
function activityClick () {
    activity.classList.add(`click`)
    appointment.classList.remove(`click`)
}
listActivity.onclick = activityClick



var listAppointment = document.querySelectorAll(`#menu ul li`)[2]
function menu3Hover () {
    listAppointment.classList.add(`active`)
}
listAppointment.onmouseenter = menu3Hover
function out3Hover (){
    listAppointment.classList.remove(`active`)
}
listAppointment.onmouseleave = out3Hover
var appointment = document.querySelector('#appointment');
function appointmentClick () {
    appointment.classList.add(`click`)
    
}
listAppointment.onclick = appointmentClick
var quit  = document.querySelector('#quit');
function quitClick () {
    appointment.classList.remove(`click`)
}
quit.onclick = quitClick
